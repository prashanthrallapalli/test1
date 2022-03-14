import { ChatBubbleOutlined,Send, Share, ThumbUp } from '@mui/icons-material'
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
const Post = ({ profilepic, image, username, timestamp,message}) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilepic} className="post__avatar" />
        <div className="post__topinfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toString().slice(0, 25)}</p>
        </div>
      </div>
      <div className="post__bottom">
       <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="post" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlined />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <Share />
          <p>Share</p>
        </div>
        <div className="post__option">
          <Send />
        <p>Send</p>
        </div>
        </div>
    </div>
  );
};

export default Post;
