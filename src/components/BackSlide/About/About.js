import "./About.scss";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
const About = () => {
  return (
    <div className="About-container">
      <img
        src="https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/logo-copy.png"
        alt="/"
      />
      <p className="about-matter">
        Duis semper mauris vitae purus rhoncus suscipit. Nunc dictum dapibus
        tellus, at viverra risus pharetra id. Nulla facilisi. Ut mollis et augue
        non gravida.
      </p>
      <div className="about-icons-container">
        <RxTwitterLogo className="about-icons" />
        <SlSocialFacebook className="about-icons" />
        <AiOutlineInstagram className="about-icons" />
      </div>
    </div>
  );
};

export default About;
