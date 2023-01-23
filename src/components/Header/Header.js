import "./Header.scss";
import React, { useState } from "react";
import { SlCallIn } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Header = () => {
  const [state, setState] = useState(false);
    setTimeout(() => setState(!state), 4000);

  return (
    <div className="Header-container" id="Home">
      {state === true ? (
        <div className="hidden-top">
          <img
            src="https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/Layer-1371.png"
            alt="/"
            className="top-image"
          />
        </div>
      ) : null}

      <div className="header-navbar-container">
        <div className="image-container">
          <img
            src="https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/logo.png"
            alt="/"
            className="nav-title-image"
          />
        </div>
        <div className="header-nav-menu-container">
          <div className="each-menu-container">
            <div className="menu-icon-container">
              <SlCallIn className="icon" />
            </div>
            <div className="menu-matter-container">
              <p className="matter">CALL US</p>
              <p className="mobile-number">+123 456 789 012</p>
            </div>
          </div>

          <div className="each-menu-container">
            <div className="menu-icon-container">
              <AiOutlineMail className="icon" />
            </div>
            <div className="menu-matter-container">
              <p className="matter">E-MAIL</p>
              <p className="mobile-number">info@mysite.com</p>
            </div>
          </div>

          <div className="each-menu-container">
            <div className="menu-icon-container">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="menu-matter-container">
              <p className="matter">LOCATION</p>
              <p className="mobile-number">Main street 12</p>
            </div>
          </div>
        </div>
      </div>
      {state === false ? (
        <div className="image-container">
          <img
            src="https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/Layer-1168.png"
            alt="/"
            className="left-image"
          />
          <div className="right-image-container">
            <img
              src="https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/Overlay-texture2.png"
              alt="/"
              className="right-image"
            />
            <img
              src="https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/Overlay-texture3.png"
              alt="/"
              className="right-image-large"
            />
          </div>
        </div>
      ) : null}

      {state === true ? (
        <div className="header-text-container">
          <p className="header-paragraph">UNIVERSITY IS THE</p>
          <h1 className="header-heading">HIGH WAY TO YOUR DREAM JOB</h1>
        </div>
      ) : (
        <div className="header-text-container">
          <p className="header-paragraph">CHOOSE THE BEST</p>
          <h1 className="header-heading">EDUCATION FOR YOUR FUTURE</h1>
        </div>
      )}
      {state === true ? (
        <div className="hidden-bottom">
          <img
            src="https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/Layer-1372.png"
            alt="/"
            className="bottom-image"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
