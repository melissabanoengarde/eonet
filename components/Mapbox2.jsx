"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const Mapbox = ({ eonetData }) => {
  const { events } = eonetData;

  // const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  // const geojson = useMemo(
  //   () => ({
  //     type: "FeatureCollection",
  //     features: data && data,
  //   }),
  //   [data]
  // );

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: process.env.NEXT_PUBLIC_MAP_STYLE,
      center: [lng, lat],
      zoom: zoom,
    });
  });

  // useEffect(
  //   () => {
  //     const eventData = events.map((x) => ({
  //       type: "Feature",
  //       properties: {
  //         name: x.title,
  //         category: x.categories[0].title,
  //         source: x.sources[0].url,
  //         date: x.geometry[0].date,
  //       },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [
  //           x.geometry[0].coordinates[0],
  //           x.geometry[0].coordinates[1],
  //         ],
  //       },
  //     }));

  //     setData(eventData);
  //     setLoaded(true);
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   []
  // );

  // console.log(geojson);

  return (
    <>
      {loaded ? (
        <div
          ref={mapContainer}
          style={{
            width: "100%",
            height: "105vh",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "1",
          }}
        />
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
    </>
  );
};

export default Mapbox;
