import "./Pages.scss";
import { List } from "antd";
let pagesData = [
  {
    type: "Application Form",
  },
  {
    type: "Blog",
  },
  {
    type: "Cart",
  },
  {
    type: "Checkout",
  },
  {
    type: "Home-Education",
  },
  {
    type: "My Account",
  },
  {
    type: "Shop",
  },
  {
    type: "Study Programs",
  },
];
const Pages = () => {
  return (
    <div className="Pages-container">
      <h4 className="pages-title">Pages</h4>
      <List
        itemLayout="horizontal"
        className="pages-list-container"
        dataSource={pagesData}
        renderItem={(item) => (
          <List.Item className="pages-list-item">
            <p className="pages-matter">{item.type}</p>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Pages;
