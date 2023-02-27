"use client";

import { useState, useMemo, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";

const Mapbox3 = ({ eonetData }) => {
  const { events } = eonetData;
  // console.log(events);

  const [loaded, setLoaded] = useState(false);
  const [popupInfo, setPopupInfo] = useState(null);
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
          // onClick={() => console.log("HOVER")}
        >
          <p
            style={{ fontSize: "1.2rem" }}
            onMouseEnter={() => {
              setPopupInfo(x);
              console.log(popupInfo);
            }}
            onMouseLeave={() => setPopupInfo(null)}
          >
            📍
          </p>
        </Marker>
      )),
    [events, popupInfo]
  );

  useEffect(() => {
    if (markers) {
      setLoaded(true);
    }
  }, []);
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
          {popupInfo && (
            <Popup
              anchor="top"
              longitude={popupInfo.geometry[0].coordinates[0]}
              latitude={popupInfo.geometry[0].coordinates[1]}
              onMouseLeave={() => setPopupInfo(null)}
            >
              <div
                style={{
                  width: "200px",
                  heigth: "100px",
                  background: "#FFFFFF",
                }}
              >
                <h1>{popupInfo.title}</h1>
              </div>
            </Popup>
          )}
        </Map>
      ) : (
        <h1>LOADINGGGG</h1>
      )}
    </div>
  );
};

export default Mapbox3;
