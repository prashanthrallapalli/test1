import React from "react";
import "./Widget.css";
import WidgetTop from '../WidgetTop/WidgetTop'
import { FiberManualRecord, Info } from "@mui/icons-material";


const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__top">
        <WidgetTop titleheading="LinkedIn News"  Icon={Info} />
        <WidgetTop
          Icon={FiberManualRecord}
          titledark="Desperate Scenes in Ukraine city"
        />
        <WidgetTop titlelight="Top news . 17,83,617 readers" />
        <WidgetTop 
        Icon={FiberManualRecord}
          titledark="Braeking the bias"
        />
        <WidgetTop titlelight="1d ago" />
        <WidgetTop
          Icon={FiberManualRecord}
          titledark="Consumer goods to get expensive"
        />
        <WidgetTop titlelight="1d ago" />
        <WidgetTop
          Icon={FiberManualRecord}
          titledark="The top voices in gender equity"
        />
        <WidgetTop titlelight="2d ago" />
        <WidgetTop
          Icon={FiberManualRecord}
          titledark="The surge in coding job"
        />
        <WidgetTop titlelight="2d ago" />

        </div>
    </div>
  );
};

export default Widget;
