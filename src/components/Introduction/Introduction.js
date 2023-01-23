import "./Introduction.scss";
import { TfiDesktop } from "react-icons/tfi";
import { BiTrophy } from "react-icons/bi";
import { SlBasketLoaded } from "react-icons/sl";
import { useState,useEffect } from "react";
const Introduction = () => {
const [show,setShow] = useState(false);
useEffect(() => {
  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset > 700) {
        setShow(true);
      } else {
        setShow(false);
      }
    },
    []
  );
});
  return (
    <div className="Introduction-container" id='About'>
      <div className="intro-title-container">
        <h4 className="intro-title">INTRODUCTION</h4>
        <h1 className="intro-heading">Welcome To Our Campus</h1>
        <p className="intro-matter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus
          elit aliquam facilisis pharetra. Aenean consectetur lacinia diam a
          tincidunt. Vivamus facilisis lacus non velit suscipit pellentesque.
          Nam ac mauris nec mi lobortis sollicitudin sed at lacus.
        </p>
      </div>
      <div className="intro-image-container">
        <div
          className="intro-image-each-image-container"
          style={{
            backgroundImage: `url(${"https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/Rectangle-835-copy-86.jpg"})`,
          }}
        >
          
          <TfiDesktop className={show === true ? 'introHover' : "intro-icon"} />
          <h4 className="intro-image-title">Learn Online</h4>
          <p className="intro-image-matter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisl
          </p>
          <p className="intro-image-button">Read More</p>
        </div>
        <div
          className="intro-image-each-image-container"
          style={{
            backgroundImage: `url(${"https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/Rectangle-835-copy-85.jpg"})`,
          }}
        >
          <SlBasketLoaded className={show === true ? 'introHover' : "intro-icon"} />
          <h4 className="intro-image-title">Book Store & Library</h4>
          <p className="intro-image-matter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisl
          </p>
          <p className="intro-image-button">Read More</p>
        </div>
        <div
          className="intro-image-each-image-container"
          style={{
            
            backgroundImage: `url(${"https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/Rectangle-835-copy-84.jpg"})`,
          }}
        >
          <BiTrophy className={show === true ? 'introHover' : "intro-icon"} />
          <h4 className="intro-image-title">ScholorShip</h4>
          <p className="intro-image-matter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisl
          </p>
          <p className="intro-image-button">Read More</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
