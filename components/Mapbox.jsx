"use client";

import { useRef, useEffect, useState } from "react";
// import "mapbox-gl/dist/mapbox-gl.css";

import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

const Mapbox = () => {
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const mapStyle = process.env.NEXT_PUBLIC_MAP_STYLE;

  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 0,
  });

  return (
    <div>
      <Map
        initialViewState={{ ...viewport }}
        style={{ width: "100%", height: "100vh" }}
        mapStyle={mapStyle}
        mapboxAccessToken={MAPBOX_TOKEN}
        onViewportChange={setViewport}
      />
    </div>
  );
};

export default Mapbox;
