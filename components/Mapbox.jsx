"use client";

import { useState, useMemo } from "react";
import Data from "./Data";

import Map, { Marker, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = ({ eonetData }) => {
  const { events } = eonetData;
  // console.log(events[0]);

  // setData(
  //   events.map((x) => {
  //     x.geometry[0];
  //   })
  // );

  // console.log(data);

  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const mapStyle = process.env.NEXT_PUBLIC_MAP_STYLE;

  const [viewport, setViewport] = useState({
    latitude: 35,
    longitude: 0,
    zoom: 1.5,
    bearing: 0,
    pitch: 0,
  });

  const geojson = {
    type: "FeatureCollection",
    features: [{ ...events[0] }],
  };
  console.log(geojson);

  const layerStyle = {
    id: "point",
    type: "circle",
    paint: {
      "circle-radius": 10,
      "circle-color": "#FFFFFF",
    },
  };

  // const pins = useMemo(
  //   () =>
  //     events.map((x) => (
  //       <Marker
  //         key={x.id}
  //         longitude={x.geometry[0].coordinates[0]}
  //         latitude={x.geometry[0].coordinates[1]}
  //         anchor="bottom"
  //       >
  //         <span
  //           style={{ fontSize: "1rem" }}
  //           onMouseEnter={() => console.log("HOVERED")}
  //           // onMouseEnter={() => <Data title={x.title} />}
  //         >
  //           🔶
  //         </span>
  //       </Marker>
  //     )),
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   []
  // );

  return (
    <div>
      <Map
        initialViewState={{ ...viewport }}
        style={{ width: "100%", height: "105vh" }}
        mapStyle={mapStyle}
        mapboxAccessToken={MAPBOX_TOKEN}
        onViewportChange={setViewport}
        onMouseEnter={""}
      >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
        {/* {pins} */}
      </Map>
    </div>
  );
};

export default Mapbox;
