import React from "react";
import { Marker } from "react-map-gl";

const Markers = ({ anchor = "bottom", ...props }) => {
  return <Marker anchor={anchor} {...props} />;
};

export default Markers;
