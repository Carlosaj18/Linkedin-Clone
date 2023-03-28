import React, { forwardRef } from "react";
import Avatar from "@mui/material/Avatar";
import InputOption from "../InputOption/InputOption";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import "./Post.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Post = forwardRef(({ name, email, message, photoUrl }, ref) => {
  const { user } = useSelector(selectUser);
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar
          className="headerOption__icon"
          style={{ fontSize: "10px" }}
          src={photoUrl && photoUrl}
        >
          {!photoUrl && user?.email[0].toUpperCase()}
        </Avatar>

        <div className="post__info">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
