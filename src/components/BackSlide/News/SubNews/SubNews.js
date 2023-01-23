import { List ,Badge} from "antd";
import "./SubNews.scss";
const SubNews = ({ data }) => {
  return (
    <div className="SubNews-container">
      <List
        itemLayout="horizontal"
        className="subnews-list-container"
        dataSource={data}
        renderItem={(item) => (
          <List.Item className="subnews-list-item">
            <div className="news-image-container">
            <Badge count={item.count}>
              <img src={item.image} alt="/" className="news-image" />
              </Badge>
            </div>
            <div className="news-matter-container">
              <h4 className="subnews-title">{item.title}</h4>
              <p className="subnews-matter">
                By <span className="specal-letters">{item.matter}</span>
              </p>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SubNews;
