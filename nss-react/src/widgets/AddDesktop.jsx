import { dummyPosts } from "../dummy";
import HeaderDesktop from "./HeaderDesktop";
import { useState } from "react";
export default function AddDesktop() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("선택된 파일 없음");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    } else {
      setSelectedFile(null);
      setFileName("선택된 파일 없음");
    }
  };
  const handleSubmit = () => {
    //여긴진짜알아서하쇼
  };

  return (
    <div className="AddpageWrapper">
      <HeaderDesktop />
      <div className="add-page-wrapper">
        <div className="add-page">
          <div className="add-page-context">
            <div className="id-blank-wrapper">
              <div className="login-label">제목</div>
              <input
                value={title}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="password-blank-wrapper">
              <div className="login-label">글</div>
              <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="id-blank-wrapper">
              <div className="login-label">썸네일</div>
              <div className="login-label-wrapper">
                <label className="custom-file-upload">
                  파일 선택
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                  />
                </label>
                <span className="file-name" id="fileName">
                  {fileName}
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
