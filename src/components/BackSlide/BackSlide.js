import About from "./About/About";
import "./BackSlide.scss";
import News from "./News/News";
import Pages from "./Pages/Pages";
import Study from "./Study/Study";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
const BackSlide = () => {
  return (
    <div className="BackSlide-container">
      <div className="backslide-components">
        <About />
        <News />
        <Study />
        <Pages />
      </div>
      <div className="backslide-footer-container">
        <p className="backslide-footer-matter">
          WordPress Theme built by
          <span className="bold-letters">{' '}Shufflehound</span>.
        </p>
        <div className="about-icons-container">
          <RxTwitterLogo className="about-icons" />
          <SlSocialFacebook className="about-icons" />
          <AiOutlineInstagram className="about-icons" />
        </div>
      </div>
    </div>
  );
};

export default BackSlide;
