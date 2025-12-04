import { Post } from "../../models/Post.js";

export default async function loadPost(req, res) {
  const posts = await Post.findAll({
    // order: [["id", "DESC"]], // 최근순
    // offset: offset,
    // limit: limit,
  });

  // posts.comment = JSON.stringify(posts.comment);

  // const postList = { ...posts };
  res.json(posts);
}
