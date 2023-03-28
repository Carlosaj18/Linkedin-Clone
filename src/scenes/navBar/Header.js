import React from "react";
import logo from "../../assets/linkedin.png";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from "../../components/HeaderOption/HeaderOption";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  

  const logoutHandler = async () => {
    await auth.signOut();
    dispatch(logout());
  };

  const handleSearch = () => {
    console.log("Search");
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="Linkedin Logo" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" onClick={handleSearch} />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption title="Me" avatar={true} onClick={logoutHandler} />
      </div>
    </div>
  );
};

export default Header;
