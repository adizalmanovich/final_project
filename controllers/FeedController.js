const Post = require("../models/post");
const path = require("path");
const { ObjectId } = require("mongodb");
const upload = require("../middleware/fileUploadMiddleware");
const postConfig = require("../config/post");

const getFeedPage = (req, res) => {
  res.sendFile(path.resolve("public", "views/Feed/Feed.html"));
};

const createPost = async (req, res) => {
  try {
    await upload(req, res);
    let { userId, content, groupId } = req.body;
    var images = [];
    var videos = [];

    req.files.forEach((file, index) => {
      if (postConfig.imageSuffixes.includes(file.mimetype)) {
        images.push(file.filename);
      } else if (postConfig.videoSuffixes.includes(file.mimetype)) {
        videos.push(file.filename);
      }
    });
    var user = new ObjectId(userId);
    var group = new ObjectId(groupId);
    let newpost = new Post({ content, images, videos, user, group });
    const post = await newpost.save();
    res.status(200).json(post);
  } catch (error) {
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json("Too many files to upload");
    }
    return res.status(500).json("Internal error occured: " + error);
  }
};

const updatePost = async (req, res) => {
  try {
    await upload(req, res);
    let { postId, userId, content, documentsToRemove } = req.body;
    let post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json("Post does not found");
    }
    images = post.images;
    videos = post.videos;
    documentsToRemove = JSON.parse(documentsToRemove);
    documentsToRemove.forEach((id, index) => {
      if (images.includes(id)) {
        images = images.filter((item) => item !== id);
      } else if (videos.includes(id)) {
        videos = videos.filter((item) => item !== id);
      }
    });
    req.files.forEach((file, index) => {
      if (postConfig.imageSuffixes.includes(file.mimetype)) {
        images.push(file.filename);
      } else if (postConfig.videoSuffixes.includes(file.mimetype)) {
        videos.push(file.filename);
      }
    });
    if (!userId) {
      userId = post.user.toString();
    }
    if (!content) {
      content = post.content;
    }
    newPost = {
      user: new ObjectId(userId),
      content: content,
      images: images,
      videos: videos,
      group: post.group,
      like: post.like,
      dislike: post.dislike,
      comments: post.comments,
    };

    post = await Post.findByIdAndUpdate({ _id: postId }, newPost);
    res.status(200).json(newPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal error occured: " + error);
  }
};

const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.body;
    var user = new ObjectId(userId);
    const posts = await Post.find({ user: user });
    if (!posts) {
      return res.status(200).json("You don't have any posts");
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json("Internal server error: " + error);
  }
};

const getGroupPosts = async (req, res) => {
  try {
    const { groupId } = req.body;
    var group = new ObjectId(groupId);
    const posts = await Post.find({ group: group });
    if (!posts) {
      return res.status(200).json("There are no posts under this group");
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json("Internal server error: " + error);
  }
};

const likePost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const post = await Post.findById(postId);
    if (!post.like.includes(userId)) {
      if (post.dislike.includes(userId)) {
        await post.updateOne({ $pull: { dislike: userId } });
      }
      await post.updateOne({ $push: { like: userId } });
      return res.status(200).json("Post has been liked");
    } else {
      await post.updateOne({ $pull: { like: userId } });
      return res.status(200).json("Post has been unlike");
    }
  } catch (error) {
    return res.status(500).json("Internal server error: " + error);
  }
};

const dislikePost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const post = await Post.findById(postId);
    if (!post.dislike.includes(userId)) {
      if (post.like.includes(userId)) {
        await post.updateOne({ $pull: { like: userId } });
      }
      await post.updateOne({ $push: { dislike: userId } });
      return res.status(200).json("Post has been disliked");
    } else {
      await post.updateOne({ $pull: { dislike: userId } });
      return res.status(200).json("Post has been undislike");
    }
  } catch (error) {
    return res.status(500).json("Internal server error: " + error);
  }
};

const commentOnPost = async (req, res) => {
  try {
    const { postId, comment, userId } = req.body;
    var user = new ObjectId(userId);
    const comments = {
      user: user,
      comment,
    };
    const post = await Post.findById(postId);
    post.comments.push(comments);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    return res.status(500).json("Internal server error: " + error);
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const post = await Post.findById(postId);
    if (post.user.toString() === userId) {
      await Post.findByIdAndDelete(postId);
      return res.status(200).json("You post has been deleted");
    } else {
      return res.status(400).json("You are not allow to delete this post");
    }
  } catch (error) {
    return res.status(500).json("Internal server error: " + error);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    if (posts) {
      res.status(200).send(posts);
    }
  } catch (error) {
    return res.status(500).json("Internal server error: " + error);
  }
};

module.exports = {
  getFeedPage,
  createPost,
  updatePost,
  getUserPosts,
  getGroupPosts,
  likePost,
  dislikePost,
  commentOnPost,
  deletePost,
  getAllPosts,
};
