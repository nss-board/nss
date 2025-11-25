export default function HeaderDesktop({}) {
  return (
    <div className="header-wrapper-for-line">
      <div className="header-wrapper">
        <div className="header-logo">NSS</div>
        <div className="header-right-handle-wrapper">
          <img src="/search.svg" className="header-searchicon" />
          <div className="header-loginbutton">로그인</div>
        </div>
      </div>
      <div className="header-line"></div>
    </div>
  );
}
