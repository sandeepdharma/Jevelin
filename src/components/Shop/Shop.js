import "./Shop.scss";
import EachShop from "./EachShop/EachShop";
const Shop = () => {
  let shopData = [
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/literature_0004_literature.jpg",
      title: "Literature, 1st Semester",
      type: "BOOK",
      rate: "28.99",
    },
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/literature_0003_fashion.jpg",
      title: "History of Fashion Design",
      type: "VOLUME",
      rate: "8.99",
    },
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/literature_0002_architecture.jpg",
      title: "Architechture Design",
      type: "BOOK",
      rate: "45.50",
    },
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/literature_0001_fashion2.jpg",
      title: "Youth And Campus",
      type: "MAGAZINE",
      rate: "10.99",
    },
    {
      image:
        "https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/literature.jpg",
      title: "Graphic Design",
      type: "BOOK",
      rate: "36.50",
    },
  ];
  return (
    <div className="Shop-container" id='Shop'>
      <div className="shop-header-container">
        <h1 className="shop-heading">Shop Online</h1>
        <button className="shop-button">SHOP NOW</button>
       
      </div>
      <div className="each-shop-container">
        <EachShop data={shopData} />
      </div>
    </div>
  );
};

export default Shop;
