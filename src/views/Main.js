import "./Main.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Divider from "../components/Divider/Divider";
import Shop from "../components/Shop/Shop";
import JoinForm from "../components/JoinForm/JoinForm";
import StudyPrograms from "../components/StudyPrograms/StudyPrograms";
import Curosal from "../components/Curosal/Curosal";
import Introduction from "../components/Introduction/Introduction";
import BackSlide from "../components/BackSlide/BackSlide";
import Counter from "../components/Counter/Counter";
import Events from "../components/Events/Events";
const Main = () => {
 
  return (
    <div className="main-container">
        <Header />
        <Counter />
        <Introduction />
        <Curosal />
        <StudyPrograms />
        <JoinForm />
        <Events />
        <Divider />
        <Shop />
        <NewsLetter />
        <Footer />
        <div className="sub">
        <BackSlide />
</div>
    </div>
  );
};

export default Main;
