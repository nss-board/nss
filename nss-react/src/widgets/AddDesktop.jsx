import { dummyPosts } from "../dummy";
import HeaderDesktop from "./HeaderDesktop";
import { useState, useEffect } from "react";

export default function AddDesktop() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("선택된 파일 없음");

  const [verified, setVerified] = useState(false);

  // useEffect(() => {
  //   const checkVerify = async () => {
  //     try {
  //       console.log("앙앙앙");
  //       const res = await fetch("/api/user/verify", {
  //         method: "GET",
  //         credentials: "include",
  //       });
  //       console.log("도라에몽");

  //       setVerified(res.ok);
  //       console.log("verified:", res.ok);
  //     } catch (error) {
  //       console.log("verify error:", error);
  //       setVerified(false);
  //     }
  //   };
  //   console.log("난 네가 정말 좋아");
  //   checkVerify();
  // }, []);

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
    try {
      console.log("click");
      fetch("/api/post/write ", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
          thumbnail: "",
        }),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="AddpageWrapper">
      <HeaderDesktop />
      <div className="add-page-wrapper">
        <div className="add-page">
          <div className="add-page-context">
            <div className="id-blank-wrapper">
              <div className="login-label">제목</div>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
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
                  onClick={handleSubmit}
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
