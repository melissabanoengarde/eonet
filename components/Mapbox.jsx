"use client";

import { useState, useMemo, useEffect } from "react";

import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = ({ eonetData }) => {
  const { events } = eonetData;
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_VERCEL_ENV_ACCESS_TOKEN;
  const mapStyle = process.env.NEXT_PUBLIC_VERCEL_ENV_MAP_STYLE;

  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const [viewport, setViewport] = useState({
    latitude: 35,
    longitude: 0,
    zoom: 1.5,
    bearing: 0,
    pitch: 0,
  });

  const geojson = {
    type: "FeatureCollection",
    features: data && data,
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

  console.log(data);
  const layerStyle = {
    id: "point",
    type: "circle",
    paint: {
      "circle-radius": 2,
      "circle-color": "#ff3700",
      "circle-opacity": 0.8,
      "circle-stroke-color": "#f28d6b",
      "circle-stroke-width": 1,
    },
  };

  return (
    <div>
      {loaded ? (
        <Map
          initialViewState={{ ...viewport }}
          style={{
            width: "100%",
            height: "105vh",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "1",
          }}
          mapStyle={mapStyle}
          mapboxAccessToken={MAPBOX_TOKEN}
          onViewportChange={setViewport}
          // onMouseEnter={""}
        >
          <Source id="my-data" type="geojson" data={geojson}>
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
    </div>
  );
};

export default Mapbox;
