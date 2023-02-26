"use client";

import { useState, useMemo, useEffect } from "react";
import Data from "./Data";

import Map, { Marker, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = ({ eonetData }) => {
  const { events } = eonetData;
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const mapStyle = process.env.NEXT_PUBLIC_MAP_STYLE;

  const [data, setData] = useState(null);

  const [loaded, setLoaded] = useState(false);

  const [viewport, setViewport] = useState({
    latitude: 35,
    longitude: 0,
    zoom: 1.5,
    bearing: 0,
    pitch: 0,
  });

  // ===============================================
  const geojson1 = {
    type: "FeatureCollection",
    features: data && data,
  };

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-122.4, 37.8] },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [168.37, -16.68] },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [123.505, -8.272] },
      },
    ],
  };

  useEffect(
    () => {
      const eventData = events.map((x) => ({
        type: "Feature",
        properties: {
          name: x.title,
          category: x.categories[0].title,
          source: x.sources[0].url,
          date: x.geometry[0].date,
        },
        geometry: {
          type: "Point",
          coordinates: [
            x.geometry[0].coordinates[0],
            x.geometry[0].coordinates[1],
          ],
        },
      }));

      setData(eventData);
      setLoaded(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  // console.log(data);
  // ===============================================

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

  console.log(data);
  console.log(geojson1.features);
  console.log(geojson.features);

  return (
    <div>
      {loaded ? (
        <Map
          initialViewState={{ ...viewport }}
          style={{ width: "100%", height: "105vh" }}
          mapStyle={mapStyle}
          mapboxAccessToken={MAPBOX_TOKEN}
          onViewportChange={setViewport}
          // onMouseEnter={""}
        >
          <Source id="my-data" type="geojson" data={geojson1}>
            <Layer {...layerStyle} />
          </Source>
        </Map>
      ) : (
        <h1
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          LOADINGGGG
        </h1>
      )}
      {/* {pins} */}
      {/* </Map> */}
    </div>
  );
};

export default Mapbox;
