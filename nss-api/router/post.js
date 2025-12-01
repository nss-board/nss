import express from "express";
import loadPost from "../controllers/post/loadPost.js";
import writePost from "../controllers/post/writepost.js";
const router = express.Router();

router.get("/list", loadPost);
router.post("/write", writePost);

export default router;
