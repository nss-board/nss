import { useState, useEffect } from "react";

import "./styles/AppStyles.css";
import HeaderDesktop from "./widgets/HeaderDesktop";
import MainDesktop from "./widgets/MainDesktop";

export default function App() {
  /* 모바일 */
  const getScreenSize = () => {
    const width = window.innerWidth;
    if (width <= 480) return "mobile";
    return "desktop";
  };

  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      {screenSize === "mobile" ? <HeaderDesktop /> : <HeaderDesktop />}
      {screenSize === "mobile" ? <MainDesktop /> : <MainDesktop />}
    </div>
  );
}
