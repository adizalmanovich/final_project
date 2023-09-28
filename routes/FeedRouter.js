const express = require("express");
const router = express.Router();

const feedController = require("../controllers/FeedController");

router.get("/", feedController.getFeedPage);
router.post("/create", feedController.createPost);
router.put("/update", feedController.updatePost);
router.get("/postsByUser", feedController.getUserPosts);
router.get("/postsByGroup", feedController.getGroupPosts);
router.put("/like", feedController.likePost);
router.put("/dislike", feedController.dislikePost);
router.put("/comment", feedController.commentOnPost);
router.delete("/delete", feedController.deletePost);
router.get("/download", feedController.downloadDocument);
router.get("/list", feedController.getAllPosts);

module.exports = router;
