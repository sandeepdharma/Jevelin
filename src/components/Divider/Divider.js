import "./Divider.scss";
import { ImQuotesLeft } from "react-icons/im";
const Divider = () => {
  
  return (
    <div className="Divider-container" id='Divider'>
      <ImQuotesLeft className="divider-icon" />
      <h1 className="divider-heading">
        Everybody is a genius. But if you judge a fish by its ability to climb a
        tree, it will live its whole life believing that it is stupid.
      </h1>
      <h6 className="divider-matter">ALBERT EINSTEIN</h6>
    </div>
  );
};

export default Divider;
