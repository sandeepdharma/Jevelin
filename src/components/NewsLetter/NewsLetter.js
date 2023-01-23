import "./NewsLetter.scss";
import { BiMessageRounded } from "react-icons/bi";
import { HiLink } from "react-icons/hi";
import { BsZoomIn } from "react-icons/bs";
import { Form, Input } from "antd";
const NewsLetter = () => {
  return (
    <div className="NewsLetter-container" id='Blog'>
      <div className="newsletter-image-container">
        <div className="news-card-container">
          <div
            className="card-image-container"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${"https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/Untitled-8.jpg"})`,
              backgroundColor: "##FE6F41",
            }}
          >
            <div className="hover-container">
              
              <div className="link-icon-container">
                <button className="round-button">
                  <HiLink className="link-icon" />
                </button>
              </div>
              <div className="zoom-icon-container">
                <button className="round-button">
                  <BsZoomIn className="zoom-icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="card-matter-box">
            <div className="card-matter-container">
              <p className="date-matter">by shufflehound September 1, 2017</p>
              <h2 className="title-matter">Best Jobs For Our Graduates</h2>
              <p className="detailed-matter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…
              </p>
            </div>
            <div className="card-line-container">
              <div className="line">
                <hr />
              </div>
              <div className="card-icon-container">
                <BiMessageRounded className="card-basket-icon" />
                <p className="count">1</p>
              </div>
            </div>
            <div className="card-type-matter-container">
              <p className="card-type-matter">INSPIRATION</p>
            </div>
          </div>
        </div>

        <div className="news-card-container">
          <div className="card-image-container">
            <img
              src="https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/Untitled-7.jpg"
              alt="/"
              className="card-image"
            />
          </div>
          <div className="card-matter-box">
            <div className="card-matter-container">
              <p className="date-matter">by shufflehound May 6, 2016</p>
              <h2 className="title-matter">Best Ways To Use Our Library</h2>
              <p className="detailed-matter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…
              </p>
            </div>
            <div className="card-line-container">
              <div className="line">
                <hr />
              </div>
              <div className="card-icon-container">
                <BiMessageRounded className="card-basket-icon" />
                <p className="count">1</p>
              </div>
            </div>
            <div className="card-type-matter-container">
              <p className="card-type-matter">TIPS & TRICKS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter-form-container">
        <p className="news-form-matter">BE UP TO DATE</p>
        <h1 className="news-form-heading">University Newsletter</h1>
        <hr className="line" />
        <Form>
          <Form.Item>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <button className="shop-button">SUBSCRIBE</button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default NewsLetter;
