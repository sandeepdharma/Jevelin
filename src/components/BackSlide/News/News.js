import "./News.scss";
import SubNews from "./SubNews/SubNews";
let newsData = [
  {
    image:
      "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/Untitled-8-768x511.jpg",
    title: "Best Jobs For Our Graduates",
    matter: "Shufflehound",
    count:1
  },
  {
    image:
      "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/Untitled-7.jpg",
    title: "Best Ways To Use Our Library",
    matter: "Shufflehound",
    count:1

  },
  {
    image:
      "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/5_0020_accounting-alone-analysis-938963-1128x675.jpg",
    title: "Rig It Up",
    matter: "Shufflehound",
    count:2
  },
];
const News = () => {
  return (
    <div className="News-container">
      <h4 className="news-title">News</h4>
      <SubNews data={newsData} />
    </div>
  );
};

export default News;
