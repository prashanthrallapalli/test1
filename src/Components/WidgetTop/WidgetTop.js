import React from "react";
import "./WidgetTop.css";

const WidgetTop = ({ Icon, titlelight, titledark, titleheading }) => {
  return (
    <div className="widgettop">
      {Icon && <Icon />}
      <h3 className="heading">{titleheading}</h3>
      <p className="light">{titlelight}</p>
      <p className="dark">{titledark}</p>
    </div>
  );
};

export default WidgetTop;
