import React from "react";
import "../my_comp/Header.css";
import { BiMenuAltRight } from "react-icons/bi";
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="flexCenter h-menu">
          <a href=""> Recidencies </a>
          <a href="">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        {/* for responsive make menu icon */}
        {/* <div className="menu-icon">
          <BiMenuAltRight size={30} />
        </div> */}
      </div>
    </section>
  );
};

export default Header;
