import "./EachShop.scss";
import { List } from "antd";
import { SlBasketLoaded } from "react-icons/sl";


const EachShop = ({ data }) => {
  return (
    <div className="EachShop-container">
      <List
        dataSource={data}
        grid={{
            gutter: 16,
            column: 5,
          }}
       gutter={4}
        renderItem={(item) => (
          <List.Item>
            <div className="eachshop-list-item">
              <div className="eachshop-image-container">
                <img src={item.image} alt="/" className="eachshop-image" />
              </div>
              <div className="eachshop-matter-container">
                <p className="eachshop-title">{item.title}</p>
                <p className="eachshop-type">{item.type}</p>
              </div>
              <div className="eachshop-line-container">
                <div className="line"><hr/></div>
                <div className="eachshop-icon-container">
                <SlBasketLoaded className="eachshop-basket-icon"/>

                </div>
              </div>

              <div className="eachshop-rate-container">
                <p className="eachshop-rate">&#163;{item.rate}</p>
              </div>
            </div>
          </List.Item>
        )}
      />
      
    </div>
  );
};

export default EachShop;
