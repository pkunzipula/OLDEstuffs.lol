import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

let mapInstance = null;

const initializeMap = (location, setLocation) => {
  mapInstance = L.map("mapid");
  window.navigator.geolocation.getCurrentPosition(
    position => {
      const latlng = [
        location.lat || position.coords.latitude,
        location.lng || position.coords.longitude
      ];
      if (!mapInstance) {
        return;
      }
      mapInstance = mapInstance.setView(latlng, 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance);
      L.marker(latlng)
        .addTo(mapInstance)
        .bindPopup("Activity Location")
        .openPopup();
      const popup = L.popup();

      mapInstance.on("click", event => {
        console.log(event.latlng);
        setLocation({
          lat: event.latlng.lat,
          lng: event.latlng.lng
        });
        popup
          .setLatLng(event.latlng)
          .setContent("Activity Location: " + event.latlng.toString())
          .openOn(mapInstance);
      });
    },
    error => {
      console.error(error);
    },
    {}
  );
};

const MapPicker = ({ location, setLocation }) => {
  useEffect(() => {
    initializeMap(location, setLocation);
    console.log("componentDidMount");
    return () => {
      mapInstance.off();
      mapInstance.remove();
      console.log("componentWillUnmount");
    };
  }, [location, setLocation]);

  return (
    <div className="MapPicker">
      <div
        id="mapid"
        css={css`
          height: 180px;
          width: 100%;
          @media (max-width: 800px) {
            margin-top: 40px;
          }
        `}
      />
    </div>
  );
};

export default MapPicker;
