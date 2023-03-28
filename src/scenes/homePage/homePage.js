import Header from "../navBar/Header";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import Feed from "../Feed/Feed";
import "../../App.css";

const HomePage = () => {
  return (
    <>
     {/** Header  */}
      <Header />
      <div className="app__body">
        {/** Sidebar  */}
        <Sidebar />
        {/** Feed  */}
        <Feed /> 
        {/** HeadWidgets  */}
        <Widgets />
      </div>
    </>
  );
};

export default HomePage;
