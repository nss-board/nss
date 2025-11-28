import { useState } from "react";
import { useParams } from "react-router-dom";
import HeaderDesktop from "./HeaderDesktop";
import { dummyPosts } from "../dummy";
export default function ArticleDesktop() {
  const { id } = useParams();
  const foundPost = dummyPosts.find((p) => p.id === Number(id));

  const [post, setPost] = useState(foundPost);
  const [liked, setLiked] = useState(false);
  const [heartCount, setHeartCount] = useState(post.likes);
  const [comment, setComment] = useState("");

  const handleHeartClick = () => {
    // 이게 원래쓰던 하트 수 업데이트 코든데 어차피 서버 연결하면 다시 해야할 것 같아서 여기 바꿔주셈
    // 11번라인에 heartcount가 원래쓰던 변수
    if (!liked) {
      setLiked(true);
      setHeartCount((prev) => prev + 1);
    } else {
      setLiked(false);
      setHeartCount((prev) => prev - 1);
    }
  };

  const handleAddComment = () => {
    if (!comment.trim()) return;

    const newComment = {
      writer: "황석준", //사용자이름연결필요
      content: comment,
      createdAt: new Date().toISOString(),
    };

    setPost((prev) => ({
      ...prev,
      comments: [...prev.comments, newComment],
    }));

    setComment("");
  };

  if (!post) return <div>포스트를 찾을 수 없습니다</div>;

  return (
    <div className="ArticlePageWrapper">
      <HeaderDesktop />

      <div className="article-page-wrapper">
        <div className="article-page-title">{post.title}</div>

        <div className="article-page-desc-wrapper">
          <div className="article-page-desc-lefttext">{post.createdAt}</div>
          <div className="article-page-desc-centerbar">|</div>
          <div className="article-page-desc-righttext">by. {post.writer}</div>
        </div>

        <div className="article-page-context">{post.content}</div>

        <div className="article-page-menu-wrapper">
          <img src="/comment.svg" className="article-page-icon" />
          <div className="article-page-comment-number">
            {post.comments.length}
          </div>
          <img
            src={liked ? "/heart-fill.svg" : "/heart-blank.svg"}
            className="article-page-icon"
            onClick={handleHeartClick}
            style={{ cursor: "pointer" }}
          />

          <div className="article-page-heart-number">{post.likes}</div>
          {/* 좋아요 변경 처리 필요 (서버 업로드) */}
        </div>
        <div className="aritlce-page-comment-wrapper">
          <div className="aritlce-page-comment-wrapper">
            <div className="article-page-comment-header">
              <div className="article-page-comment-title">댓글</div>
              <div className="article-page-comment-title-underline" />
            </div>

            {post.comments.length === 0 ? (
              <div className="article-page-comment-empty">
                아직 댓글이 없습니다.
              </div>
            ) : (
              post.comments.map((comment, index) => (
                <div
                  key={index}
                  className="article-page-comment-content-wrapper"
                >
                  <div className="article-page-comment-author">
                    {comment.writer}
                  </div>
                  <div className="article-page-comment-content">
                    {comment.content}
                  </div>
                </div>
              ))
            )}
            <div className="article-page-comment-add-wrapper">
              <div className="article-page-comment-author">황석준</div>
              <div className="article-page-comment-context">
                <textarea
                  type="text"
                  placeholder="훈훈한 댓글 부탁드립니다."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="article-page-comment-context-input"
                />
              </div>
              <div className="article-page-comment-send-wrapper">
                <img
                  src="/send.svg"
                  className="article-page-comment-sendicon"
                  onClick={handleAddComment}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
