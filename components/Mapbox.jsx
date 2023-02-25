"use client";
import { useRef, useEffect, useState } from "react";
// import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const Mapbox = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  // Initialize map
  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div
        ref={mapContainer}
        className="map-container"
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default Mapbox;
