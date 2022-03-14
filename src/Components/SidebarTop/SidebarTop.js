import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarTop.css";

const SidebarTop = ({ titlelight, titledark, Icon, src }) => {
  return (
    <div className="sidebartop">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      
      <p className="light">{titlelight}</p>
      <p className="dark">{titledark}</p>
    </div>
  );
};

export default SidebarTop;

