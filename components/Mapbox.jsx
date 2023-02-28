"use client";

import { useState, useMemo, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import Data from "./Data";
import Loading from "./Loading";

const Mapbox = ({ eonetData }) => {
  const { events } = eonetData;
  // console.log(events);

  const [loaded, setLoaded] = useState(false);
  const [popupInfo, setPopupInfo] = useState(null);
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const mapStyle = process.env.NEXT_PUBLIC_MAP_STYLE;

  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -42,
    zoom: 2.5,
  });

  const markers = useMemo(
    () =>
      events.map((x) => (
        <Marker
          key={x.id}
          longitude={x.geometry[0].coordinates[0]}
          latitude={x.geometry[0].coordinates[1]}
          anchor="bottom"
          // onClick={() => console.log("HOVER")}
        >
          <p
            // style={{ fontSize: "1.2rem" }}
            className="text-[1.2rem] hover:text-[3rem] transition-all ease-in-out"
            onMouseEnter={() => {
              setPopupInfo(x);
            }}
            // onMouseLeave={() => setPopupInfo(null)}
          >
            📍
          </p>
        </Marker>
      )),
    [events]
  );

  useEffect(() => {
    if (markers) {
      setLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loaded ? (
        <Map
          // className="w-full h-[105vh] fixed top-0 left-0 z-1"
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

          {popupInfo ? (
            <Data
              title={popupInfo.title}
              date={popupInfo.geometry[0].date}
              source={popupInfo.sources[0].url}
              longitude={popupInfo.geometry[0].coordinates[0]}
              latitude={popupInfo.geometry[0].coordinates[1]}
              // onMouseLeave={() => setPopupInfo(null)}
            />
          ) : (
            <Data />
          )}
        </Map>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Mapbox;
