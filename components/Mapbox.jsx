"use client";

import { useState, useMemo } from "react";

import Map, { Marker, ScaleControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = ({ eonetData }) => {
  const { events } = eonetData;
  // console.log(events[0].geometry[0].coordinates[0]);

  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const mapStyle = process.env.NEXT_PUBLIC_MAP_STYLE_2;

  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 0,
    bearing: 0,
    pitch: 0,
  });

  const pins = useMemo(
    () =>
      events.map((x) => (
        <Marker
          key={x.id}
          longitude={x.geometry[0].coordinates[0]}
          latitude={x.geometry[0].coordinates[1]}
          anchor="bottom"
        >
          <span style={{ fontSize: "2rem" }}>🧌</span>
        </Marker>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div>
      <Map
        initialViewState={{ ...viewport }}
        style={{ width: "100%", height: "100vh" }}
        mapStyle={mapStyle}
        mapboxAccessToken={MAPBOX_TOKEN}
        onViewportChange={setViewport}
      >
        {pins}
        <ScaleControl />
      </Map>
    </div>
  );
};

export default Mapbox;
