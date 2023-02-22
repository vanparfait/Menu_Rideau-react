import React, { useEffect, useState } from "react";
import "./CurtainMenu.css";
import menu from "../images/menu.svg";
//import croix from "../images/croix.svg";

const CurtainMenu = () => {
  const [checkWidth, setCheckWidth] = useState(window.innerWidth);
  const [toogleNav, setToogleNav] = useState(false);
  function toogleNavFunc() {
    setToogleNav(!toogleNav);
  }

  function checkFun() {
    setCheckWidth(window.innerWidth);
  }

  console.log(checkWidth);

  useEffect(() => {
    window.addEventListener("resize", checkFun);
    return () => window.removeEventListener("resize", checkFun);
  }, []);
  return (
    <>
      {checkWidth < 900 && (
        <button onClick={toogleNavFunc} className="floating-btn">
          <img src={menu} alt="menu-rideau" />
        </button>
      )}

      <nav className={toogleNav ? "active" : ""}>
        {checkWidth < 900 && (
          <button className="close-curtain" onClick={toogleNavFunc}>
            X
          </button>
        )}

        <a href="#f">Home</a>
        <a href="#h">Service</a>
        <a href="#y">Contact</a>
      </nav>
    </>
  );
};

export default CurtainMenu;
