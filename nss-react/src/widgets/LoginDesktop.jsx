import HeaderDesktop from "./HeaderDesktop";
import { Link } from "react-router-dom";
import { axios } from "axios";

export default function LoginDesktop() {
  return (
    <div className="LoginPageWrapper">
      <HeaderDesktop />
      <div className="login-page-wrapper">
        <div className="login-page">
          <div className="login-form-wrapper">
            <div className="id-blank-wrapper">
              <div className="login-label">아이디</div>
              <input type="text" />
            </div>
            <div className="password-blank-wrapper">
              <div className="login-label">비밀번호</div>
              <input type="text" />
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
                onClick={() => {
                  axios.get;
                }}
              >
                로그인
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
