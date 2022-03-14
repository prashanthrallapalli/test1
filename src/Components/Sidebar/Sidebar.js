import React from "react";
import { useSelector } from "react-redux";
import SidebarTop from "../SidebarTop/SidebarTop";
import "./Sidebar.css";
import { Bookmark } from "@mui/icons-material";

const Sidebar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <SidebarTop titledark={user.displayName} src={user.photoURL} />
        <hr />
        <SidebarTop titlelight="Connections"  />
        <SidebarTop titlelight="Grow your network" />
        <SidebarTop titlelight="Who viwed your profile  10" />
        <hr />
        <SidebarTop titlelight="Access exclusive tools & insights" />
        <SidebarTop titlelight="Try premium for free" />
        <hr />
        <SidebarTop Icon={Bookmark} titledark="My Items" />
      </div>
      </div>
  );
};

export default Sidebar;
