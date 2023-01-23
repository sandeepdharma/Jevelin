import "./TopFixNav.scss";
import React, { useState, useEffect } from "react";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import { SlBasket } from "react-icons/sl";
import { Badge, Popover } from "antd";
const TopFixNav = () => {
  const [yOffSet, setYoffSet] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.pageYOffset > 80) {
          setYoffSet(true);
        } else {
          setYoffSet(false);
        }
      },
      []
    );
  });
  const content = <p>No products in the cart</p>;

  let TopFixNavData = [
    {
      name: "HOME",
      link: "#Home",
    },
    {
      name: "ABOUT",
      link: "#About",
    },
    {
      name: "SHOP",
      link: "#Shop",
    },
    {
      name: "STUDY PROGRAMS",
      link: "#StudyPrograms",
    },
    {
      name: "BLOG",
      link: "#Blog",
    },
    {
      name: "APPLY",
      link: "#Apply",
    },
  ];

  const [state, setState] = useState(null);

  const buttonHandler = (i) => {
    if (state === i) {
      setState(null);
    }
    setState(i);
  };
  return (
    <div className="TopFixNav-container">
      <div className={yOffSet === true ? "lessTop" : "top"}>
        <div className="menu-main-container">
          {TopFixNavData.map((item, i) => (
            <div className="menu-container" key={i}>
              <a
                href={item.link}
                className={
                  state === i ? "menu-item active" : "menu-item non-active"
                }
                onClick={() => {
                  buttonHandler(i);
                }}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className="nav-icons-container">
          <div className="icon-div">
            <RxTwitterLogo className="nav-icons" />
          </div>
          <div className="icon-div">
            <SlSocialFacebook className="nav-icons" />
          </div>
          <div className="icon-div">
            <AiOutlineInstagram className="nav-icons" />
          </div>
          <div className="icon-div">
            <Popover placement="bottom" content={content} trigger="hover">
              <Badge count={0} showZero>
                <SlBasket className="nav-icons" />
              </Badge>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFixNav;
