import { dummyPosts } from "../dummy";
import HeaderDesktop from "./HeaderDesktop";
export default function AddDesktop() {
  return (
    <div className="AddpageWrapper">
      <HeaderDesktop />
      <div className="add-page-wrapper">
        <div className="add-page">
          <div className="add-page-context">
            <div className="id-blank-wrapper">
              <div className="login-label">제목</div>
              <input />
            </div>
            <div className="password-blank-wrapper">
              <div className="login-label">글</div>
              <input />
            </div>
            <div className="id-blank-wrapper">
              <div className="login-label">썸네일</div>
              <div className="login-label-wrapper">
                <label className="custom-file-upload">
                  파일 선택
                  <input type="file" id="fileInput" />
                </label>
                <span className="file-name" id="fileName">
                  선택된 파일 없음
                </span>
              </div>
              <div className="add-page-icon-wrapper">
                <img
                  src="/send.svg"
                  className="article-page-comment-sendicon"
                  //onClick={} 알아하쇼
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
