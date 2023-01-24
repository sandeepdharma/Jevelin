import "./Curosal.scss";
import CurosalVideo from "./CurosalVideo/CurosalVideo";
const Curosal = () => {
  let curosalData = [
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/rawpixel-675358-unsplash.png",
      teacher: "Katty Gallardo",
      type: "MUSIC TEACHER",
    },
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/rawpixel-675358-unsplash2.png",
      teacher: "Jhon Doe",
      type: "GEOLOGY TEACHER",
    },
  ];
  return (
    <div className="Curosal-container">
      <div className="curosal-left-container">
        <h4 className="curosal-title">PROFESSIONAL</h4>
        <h1 className="curosal-heading">Teachers</h1>

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={curosalData[0].image} alt="/" />
              <p className="curosal-matter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                rhoncus elit aliquam facilisis pharetra. Aenean consectetur
                lacinia diam a tincidunt. Vivamus facilisis lacus non velit
                suscipit pellentesque. Nam ac mauris nec mi lobortis
                sollicitudin sed at lacus.
              </p>
              <p className="curosal-teacher">{curosalData[0].teacher}</p>
              <p className="curosal-type">{curosalData[0].type}</p>
            </div>
            <div className="carousel-item">
              <img src={curosalData[1].image} alt="/" />
              <p className="curosal-matter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                rhoncus elit aliquam facilisis pharetra. Aenean consectetur
                lacinia diam a tincidunt. Vivamus facilisis lacus non velit
                suscipit pellentesque. Nam ac mauris nec mi lobortis
                sollicitudin sed at lacus.
              </p>
              <p className="curosal-teacher">{curosalData[1].teacher}</p>
              <p className="curosal-type">{curosalData[1].type}</p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="curosal-right-container">
        <CurosalVideo />
      </div>
    </div>
  );
};

export default Curosal;
