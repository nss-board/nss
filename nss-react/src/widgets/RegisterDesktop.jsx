import HeaderDesktop from "./HeaderDesktop";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterDesktop() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  const handleSendCode = () => {
    fetch("/api/user/sendCode", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        email,
        password,
        phoneNumber,
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="LoginPageWrapper">
      <HeaderDesktop />
      <div className="register-page-wrapper">
        <div className="register-page">
          <div className="register-page-innerwrapper">
            <div className="register-title">회원가입</div>
            <div className="register-name-wrapper">
              <div className="register-label">아이디 :</div>
              <input
                type="text"
                className="register-input"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="register-mail-wrapper">
              <div className="register-label">이메일 :</div>
              <input
                type="text"
                className="register-input"
                value={email}
                onChange={(e) => setId(e.target.value)}
              />
              {/* <div className="register-mail-confirm-button">E-mail 인증</div> */}
            </div>
            <div className="register-password-wrapper">
              <div className="register-label">비밀번호 :</div>
              <input
                type="password"
                className="register-input"
                value={password}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="register-phone-wrapper">
              <div className="register-label">핸드폰 번호 :</div>
              <input
                type="text"
                className="register-input"
                value={phoneNumber}
                onChange={(e) => setId(e.target.value)}
              />
              <div className="register-phone-confirm-button">인증번호 발송</div>
            </div>
            <div className="register-verify-wrapper">
              <div className="register-label">인증번호 :</div>
              <input
                type="text"
                className="register-input"
                value={verifyCode}
                onChange={(e) => setId(e.target.value)}
              />
              <div
                className="register-phone-confirm-button"
                onClick={handleSendCode}
              >
                인증하기
              </div>
            </div>
            <div className="register-buttons-wrapper">
              <div
                className="register-buttons-back"
                onClick={() => navigate(-1)}
              >
                이전
              </div>
              <div className="register-buttons-register">회원가입</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
