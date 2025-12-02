import { verifyUser1 } from "../user/verifyUser.js";
import { Post } from "../../models/Post.js";
export default async function writePost(req, res) {
  try {
    const { title, content, thumbnail } = req.body;
    if (!title || !content) {
      return res.status(400).json({
        ok: false,
        message: "제목과 내용이 없습니다.",
      });
    }

    const payload = await verifyUser1(req, res);
    console.log(payload);
    if (!payload.ok)
      return res.status(401).json({
        ok: false,
        message: "로그인이 필요합니다. ",
      });

    const writer = payload.id;

    const post = await Post.create({
      title,
      content,
      thumbnail,
      writer,
      likes: 0,
      comments: [],
    });

    return res.status(200);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}
