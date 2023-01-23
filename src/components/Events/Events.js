import "./Events.scss";
import { RiStopCircleFill } from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";
import {BsCalendarEvent} from 'react-icons/bs';
 import {TbDeviceDesktopAnalytics} from 'react-icons/tb';
 import {BiMessage} from 'react-icons/bi'
const Events = () => {
  return (
    <div className="Events-container">
      <div className="events-matter-container">
        <p className="events-matter">DON'T MISS OUT</p>
        <h1 className="events-heading">Upcoming Events</h1>
      </div>

      <div className="timeline">
        <div className="line">

            
          <div className="each-event-container">
            <div className="event-matter-container">
              <div className="matter-container">
                <div className="matter-heading">
                  <h3 className="heading">Campus Student Meeting </h3>
                  <MdPersonOutline className="icon" />
                </div>
                <p className="matter-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean mattis ultrices turpis, nec vulputate metus luctus
                  pharetra. Duis suscipit iaculis tempus. Aliquam egestas,
                  libero sit amet ullamcorper ultrices.
                </p>
              </div>
              <div className="image-container">
                <img
                  src="https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/andres-gerlotti-560529-unsplash.jpg"
                  alt="/"
                  className="image"
                />
              </div>
            </div>
            <div className="event-icon-container">
              <RiStopCircleFill className="event-icon" />
            </div>
            <div className="event-time-container">July 23, 10:30 A.M.</div>
          </div>
          

          <div className="each-event-container-next">
            <div className="event-time-container">July 30, 12:00 A.M.</div>
            <div className="event-icon-container">
              <RiStopCircleFill className="event-icon" />
            </div>
            <div className="event-matter-container">
            <div className="image-container">
                <img
                  src="https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/rawpixel-626050-unsplash.jpg"
                  alt="/"
                  className="image"
                />
              </div>
              <div className="matter-container">
                <div className="matter-heading">
                <BsCalendarEvent className="icon" />
                  <h3 className="heading">Graduation Party Planning</h3>
                  
                </div>
                <p className="matter-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean mattis ultrices turpis, nec vulputate metus luctus
                  pharetra. Duis suscipit iaculis tempus. Aliquam egestas,
                  libero sit amet ullamcorper ultrices.
                </p>
              </div>
              
            </div>
          </div>

          <div className="next-event-container">
            <div className="event-matter-container">
              <div className="matter-container">
                <div className="matter-heading">
                  <h3 className="heading">New Headquarters Presentation </h3>
                  <TbDeviceDesktopAnalytics className="icon" />
                </div>
                <p className="matter-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean mattis ultrices turpis, nec vulputate metus luctus
                  pharetra. Duis suscipit iaculis tempus. Aliquam egestas,
                  libero sit amet ullamcorper ultrices.
                </p>
              </div>
              <div className="image-container">
                <img
                  src="https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/tanialee-gonzalez-667998-unsplash.jpg"
                  alt="/"
                  className="image"
                />
              </div>
            </div>
            <div className="event-icon-container">
              <RiStopCircleFill className="event-icon" />
            </div>
            <div className="event-time-container">August 10, 14:00 P.M.</div>
          </div>
          

          <div className="each-event-next-container">
            <div className="event-time-container">September 3, 09:30 A.M.</div>
            <div className="event-icon-container">
              <RiStopCircleFill className="event-icon" />
            </div>
            <div className="event-matter-container">
            <div className="image-container">
                <img
                  src="https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/logan-isbell-672551-unsplash.jpg"
                  alt="/"
                  className="image"
                />
              </div>
              <div className="matter-container">
                <div className="matter-heading">
                  
                  <BiMessage className="icon" />
                  <h3 className="heading">Graduates Tell Their Story</h3>
                </div>
                <p className="matter-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean mattis ultrices turpis, nec vulputate metus luctus
                  pharetra. Duis suscipit iaculis tempus. Aliquam egestas,
                  libero sit amet ullamcorper ultrices.
                </p>
              </div>
              
            </div>
          </div>
         
         

         
        </div>
      </div>

      <button className="event-button">VIEW ALL</button>
    </div>
  );
};

export default Events;
