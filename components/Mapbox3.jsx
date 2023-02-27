"use client";

import { useState, useMemo, useEffect } from "react";
import Map, { Marker } from "react-map-gl";

const Mapbox3 = ({ eonetData }) => {
  const { events } = eonetData;
  // console.log(events);

  const [loaded, setLoaded] = useState(false);
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const mapStyle = process.env.NEXT_PUBLIC_MAP_STYLE;

  const [viewport, setViewport] = useState({
    latitude: 35,
    longitude: 0,
    zoom: 1.5,
    bearing: 0,
    pitch: 0,
  });

  const markers = useMemo(
    () =>
      events.map((x) => (
        <Marker
          key={x.id}
          longitude={x.geometry[0].coordinates[0]}
          latitude={x.geometry[0].coordinates[1]}
          anchor="bottom"
        >
          <p>📍</p>
        </Marker>
      )),
    [events]
  );

  useEffect(() => {
    if (markers) {
      setLoaded(true);
    }
  }, [markers]);
  // console.log(markers);

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
        >
          {markers}
        </Map>
      ) : (
        <h1>LOADINGGGG</h1>
      )}
    </div>
  );
};

export default Mapbox3;
