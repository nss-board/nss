import { User } from "./models/User.js";

export default function loadPost(count, page) {
  const n = count * (page - 1) + 1;
  const m = count * page;

  const offset = n - 1;
  const limit = m - n + 1;

  const posts = Post.findAll({
    order: [["id", "DESC"]], // 최근순
    offset: offset,
    limit: limit,
  });

  posts.comment = JSON.stringify(posts.comment);

  return posts;
}
