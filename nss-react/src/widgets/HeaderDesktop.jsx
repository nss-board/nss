import { Link } from "react-router-dom";

export default function HeaderDesktop({}) {
  return (
    <div className="header-wrapper-for-line">
      <div className="header-wrapper">
        <div className="header-logo">NSS</div>
        <div className="header-right-handle-wrapper">
          <img src="/search.svg" className="header-searchicon" />
          <Link to="/login">
            <div className="header-loginbutton">로그인</div>
          </Link>
        </div>
      </div>
      <div className="header-line"></div>
    </div>
  );
}
