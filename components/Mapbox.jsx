"use client";

import { useState, useMemo, useEffect, useCallback } from "react";

import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = ({ eonetData }) => {
  const { events } = eonetData;
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  // console.log(MAPBOX_TOKEN);
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

  const geojson = useMemo(
    () => ({
      type: "FeatureCollection",
      features: data && data,
    }),
    [data]
  );

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

  const layerStyle = {
    id: "point",
    type: "circle",
    paint: {
      "circle-radius": {
        base: 1.5, // base-level: size of the circls at the lowest zoom level
        stops: [
          // zoomLvl-circleRadius pair
          [1.5, 2],
          [7, 15],
        ],
      },
      "circle-color": "#ff3700",
      "circle-opacity": 0.8,
      "circle-stroke-color": "#f28d6b",
      "circle-stroke-width": 1,
    },
  };

  console.log(geojson);

  const [hoverInfo, setHoverInfo] = useState(null);
  const onHover = useCallback((event) => {
    const { features, point } = event;
    console.log(features);
    const hoveredFeature = features && features[0];

    setHoverInfo(hoveredFeature && { feature: hoveredFeature, x, y });
  }, []);
  console.log(hoverInfo);

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
          onMouseMove={onHover}
        >
          <Source id="my-data" type="geojson" data={geojson}>
            <Layer {...layerStyle} />
          </Source>

          {/* {hoverInfo && (
            <div
              className="tooltip"
              style={{ left: hoverInfo.x, top: hoverInfo.y }}
            >
              <div>Name: {hoverInfo.feature.properties.name}</div>
              <div>Date: {hoverInfo.feature.properties.date}</div>
              <div>Source: {hoverInfo.feature.properties.source}</div>
            </div>
          )} */}
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
