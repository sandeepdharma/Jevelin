import "./StudyPrograms.scss";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { List } from "antd";
import { BsLink45Deg } from "react-icons/bs";
const StudyPrograms = () => {
  const [current, setCurrent] = useState("ALL");
  const [data, setData] = useState();

  // const [showHover, setShowHover] = useState(false);
  // const [mainSlide, setMainSlide] = useState(true);

  let studyData = [
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/5_0023_rawpixel-250087-unsplash.jpg",
      title: "Civil Engineering",
      type: "ENGINEERING",
      matter: "Civil engineering plays a keyrole in the creation and...",
    },
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/3.jpg",
      title: "Visual Arts",
      type: "ART",
      matter:
        "The academy has implemented a number of collabrations with companies...",
    },
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/5_0022_adam-birkett-355529-unsplash.jpg",
      title: "Photography",
      type: "ART",
      matter:
        "About the progrm the program photography programs provides students with a...",
    },
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/2.jpg",
      title: "Software Development",
      type: "IT",
      matter:
        "Softwware developments are needed in many different industries from biotechnology...",
    },
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/5_0007_kelly-sikkema-291518-unsplash.jpg",
      title: "Animation",
      type: "ART",
      matter:
        "YOUR CARRER STARTS ON 3D Modeler Texture Artist Riging Artist...",
    },
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/5_0021_abstract-art-blur-270549.jpg",
      title: "Electronic Engineering",
      type: "ENGINEERING",
      matter:
        "Semester 1 st in this semester, students will be introduced to...",
    },
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/5_0011_coffee-cup-of-coffee-desk-905163.jpg",
      title: "Social Media & Marketing",
      type: "VISUAL DESIGN",
      matter:
        "Social Media and web marketing will provide students with essential...",
    },
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/5_0016_apple-brainstorming-business-908288.jpg",
      title: "Banking,Finance & Managemnet",
      type: "ECONOMY",
      matter:
        "The programme comporises of four key 'courses':Business management &...",
    },
  ];
  const items = [
    {
      label: "ALL",
      key: "ALL",
    },
    {
      label: "ART",
      key: "ART",
    },
    {
      label: "ECONOMY",
      key: "ECONOMY",
    },
    {
      label: "ENGINEERING",
      key: "ENGINEERING",
    },
    {
      label: "IT",
      key: "IT",
    },
    {
      label: "VISUAL DESIGN",
      key: "VISUAL DESIGN",
    },
  ];
  const showDesiredImages = (data) => {
    if (data === "ALL") {
      setData(studyData);
    } else {
      let filteredData = studyData.filter((element) => element.type === data);
      //   console.log("filteredData", filteredData);
      setData(filteredData);
    }
  };
  const onClick = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
    showDesiredImages(e.key);
  };
  const updateData = (studyData) => {
    setData(studyData);
  };
  useEffect(() => {
    if (data === undefined) {
      updateData(studyData);
    }
  });
  // const onMouseOverHandler = (data) => {
  //   console.log(data.title, ":entered");
  //   setShowHover(true);
  //   setMainSlide(false);
  // };
  // const onMouseOutHandler = (data) => {
  //   console.log(data.title, ":left");
  //   setShowHover(false);
  //   setMainSlide(true);
  // };

  return (
    <div className="StudyPrograms-container" id='StudyPrograms'>
      <div className="study-title-container">
        <h4 className="study-title">MOST POPULAR</h4>
        <h1 className="study-heading">Study Programs</h1>
      </div>
      <div className="study-menu-container">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
      <div className="study-list-container">
        <List
          grid={{}}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <div className="study-list-item">
                <div className="study-image-container">
                  <div
                    className="hover-container"
                    style={{
                      backgroundSize: "cover",
                      backgroundImage: `url(${item.image})`,
                      backgroundColor: "##FE6F41",
                    }}
                  >
                    <div className="test-inner">
                      <h2 className="hover-title">{item.title}</h2>
                      <p className="hover-matter">{item.matter}</p>
                      <div className="hover-inner-container">
                        <BsLink45Deg className="hover-icon" />
                        <p className="hover-type">{item.type}</p>
                      </div>
                    </div>
                  </div>
                  {/* ) : (
                    <img src={item.image} alt="/" className="study-image" />
                  )} */}
                </div>
                <div className="study-matter-container">
                  <p className="study-title">{item.title}</p>
                  <p className="study-type">{item.type}</p>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
      <div className="study-more-button-container">
        <button className="study-button">VIEW ALL PROGRAMS</button>
      </div>
    </div>
  );
};

export default StudyPrograms;
