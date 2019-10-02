import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

let mapInstance = null;

const initializeMap = location => {
  if (!location) return;
  if (!location.lat || !location.lng) return;
  mapInstance = L.map("mapid", {
    center: [location.lat, location.lng],
    zoom: 13,
    closePopupOnClick: false,
    boxZoom: false,
    doubleClickZoom: false,
    zoomControl: false,
    scrollWheelZoom: false,
    trackResize: false
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapInstance);

  //   L.marker([location.lat || 36.015964, location.lng || -115.176429])
  //     .addTo(mapInstance)
  //     .bindPopup("Activity Location")
  //     .openPopup();

  let myIcon = L.icon({
    iconUrl: "/img/marker-icon-2x.png",
    iconSize: [38, 65],
    iconAnchor: [22, 64]
  });
  L.marker([location.lat, location.lng], {
    icon: myIcon
  }).addTo(mapInstance);
};

const StuffsLocation = ({ location }) => {
  useEffect(() => {
    initializeMap(location);
    console.log("componentDidMount");
    return () => {
      if (!mapInstance) return;
      console.log(mapInstance);
      mapInstance.off();
      mapInstance.remove();
      console.log("componentWillUnmount");
    };
  }, [location]);
  if (!location || !location.lat || !location.lng) {
    mapInstance = null;
    return <div></div>;
  }
  return (
    <div
      className="MapPicker"
      css={css`
        padding: 30px 0;
        margin-left: 50px;
      `}
    >
      <div
        id="mapid"
        css={css`
          margin: 0 auto;
          height: 300px;
          width: 100%;
        `}
      />
    </div>
  );
};

export default StuffsLocation;
