import { useState } from "react";
import HeaderDesktop from "./HeaderDesktop";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LoginDesktop() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = async () => {
    try {
      // const response = await axios.post(
      //   "http://192.168.0.20:8080/user/login",
      //   {
      //     email: id,
      //     password: pw,
      //   },
      //   {
      //     withCredentials: true,
      //   }
      // );
      // console.log(response.data);

      fetch("/api/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: id,
          password: pw,
        }),
      }).then((res) => res.json().then((res) => console.log(res)));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="LoginPageWrapper">
      <HeaderDesktop />
      <div className="login-page-wrapper">
        <div className="login-page">
          <div className="login-form-wrapper">
            <div className="id-blank-wrapper">
              <div className="login-label">아이디</div>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="password-blank-wrapper">
              <div className="login-label">비밀번호</div>
              <input
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
              />
            </div>
            <div className="login-footer-wrapper">
              <Link to="/register">
                <div className="no-account-wrapper">
                  <div className="no-accout-text">계정이 없으신가요?</div>
                  <div className="no-account-underline" />
                </div>
              </Link>
              <div
                className="login-button-on-loginpage"
                onClick={handleSubmit}
                style={{ cursor: "pointer" }}
              >
                로그인
              </div>
              <div
                onClick={() => {
                  fetch("/api/user/verify", {
                    method: "GET",
                    credentials: "include",
                  }).then((res) => console.log("11"));
                }}
              >
                확인
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
