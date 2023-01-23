import "./Footer.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineClockCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="footer-button-container">
        <button className="footer-button">CONTACT US</button>
      </div>
      <div className="content-container">
        <div className="icon-container">
          <HiOutlineLocationMarker className="footer-icon" />
        </div>
        <div className="matter-container">
          <p className="heading">ADDRESS</p>
          <p className="matter">Street number 5</p>
        </div>
      </div>
      <div className="content-container">
        <div className="icon-container">
          <FiMail className="footer-icon" />
        </div>
        <div className="matter-container">
          <p className="heading">EMAIL</p>
          <p className="matter">info@business.com</p>
        </div>
      </div>
      <div className="content-container">
        <div className="icon-container">
        <BsTelephone className="footer-icon" />
        </div>
        <div className="matter-container">
          <p className="heading">TELEPHONE</p>
          <p className="matter">232 837 82 28</p>
        </div>
      </div>
      <div className="content-container">
        <div className="icon-container">
        <AiOutlineClockCircle className="footer-icon" />
        </div>
        <div className="matter-container">
          <p className="heading">WORK HOURS</p>
          <p className="matter">Mon. - Fri.: 11AM - 19PM</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
