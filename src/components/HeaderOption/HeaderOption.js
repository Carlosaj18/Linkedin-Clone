import Avatar from '@mui/material/Avatar';
import React from "react";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const { user } = useSelector(selectUser);

  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          className="headerOption__icon"
          style={{ fontSize: "10px" }}
          src={user.photoUrl && user.photoUrl}
        >
          {!user.photoURL && user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
