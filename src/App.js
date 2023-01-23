import "./App.css";
import BottomFixNav from "./components/FixedNavs/BottomFixNav/BottomFixNav";
import RightFixNav from "./components/FixedNavs/RightFixNav/RightFixNav";
import TopFixNav from "./components/FixedNavs/TopFixNav/TopFixNav";
import Main from "./views/Main";

function App() {
  return (
    <div className="App">
      <TopFixNav/>
      <RightFixNav/>
      <BottomFixNav/>
      <Main/>
    </div>
  );
}

export default App;
