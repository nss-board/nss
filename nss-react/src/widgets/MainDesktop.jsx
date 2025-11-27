import { useState } from "react";
import { Link } from "react-router-dom";
import { dummyPosts } from "../dummy";

export default function HeaderDesktop() {
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  // 정렬
  const sortedPosts = [...dummyPosts].sort((a, b) => {
    return sortOrder === "asc"
      ? new Date(a.createdAt) - new Date(b.createdAt)
      : new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="main-wrapper">
      <div className="sort-wrapper">
        <img src="/sort.svg" className="sort-icon" onClick={toggleSortOrder} />
        <div className="sort-classify">
          {sortOrder === "asc" ? "오름차순" : "내림차순"}
        </div>
      </div>

      <div className="main-content-wrapper-foralign">
        <div className="content-table-wrapper">
          {sortedPosts.map((post) => (
            <Link to={`/article/${post.id}`} key={post.id}>
              <div className="content-wrapper">
                <div className="content-box">
                  <div className="content-preview-image-wrapper">
                    <img
                      src={post.thumbnail}
                      className="content-preview-image"
                      alt="thumbnail"
                    />
                  </div>
                  <div className="content-preview-content-wrapper">
                    <div className="content-preview-dividewrapper">
                      <div className="content-title">{post.title}</div>
                      <div className="content-desc">{post.content}</div>
                    </div>
                    <div className="content-footer-wrapper">
                      <div className="content-footer-top">
                        <div className="content-footer-content">
                          {post.createdAt.split(" ")[0]} -{" "}
                          {post.comments.length}개의 댓글 - {post.likes}개의
                          좋아요
                        </div>
                        <div className="content-footer-content">
                          by {post.writer}
                        </div>
                      </div>
                      <div className="content-footer-bottomline" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
