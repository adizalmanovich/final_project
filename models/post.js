const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  images: {
    type: Array,
  },
  videos: {
    type: Array,
  },
  like: {
    type: Array,
  },
  dislike: {
    type: Array,
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Post", PostSchema);
