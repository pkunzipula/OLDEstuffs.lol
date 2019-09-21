import React, { useState } from "react";
import MapPicker from "./MapPicker";
import DatePicker from "../StuffsDetail/DatePicker";

const AddStuffs = ({ setScreen, storeStuffs }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [datetime, setDatetime] = useState(new Date());
  const [location, setLocation] = useState({
    lat: 36.015964,
    lng: -115.176429
  });

  const saveStuffs = () => {
    storeStuffs({ title, description, location, datetime });
    setScreen("stuffs");
  };
  const goHome = () => {
    setScreen("homepage");
  };
  return (
    <div className="AddStuffs">
      <h2>Title of Stuffs: {title}</h2>
      <input onChange={event => setTitle(event.target.value)} />
      <DatePicker datetime={datetime} setDatetime={setDatetime} />
      <MapPicker setLocation={setLocation} location={location} />

      <h2>Describe this Stuffs</h2>
      <textarea
        onChange={event => setDescription(event.target.value)}
      ></textarea>
      <button onClick={saveStuffs}>Save Your Stuffs!</button>
      <br />
      <button onClick={goHome} className="btn-gohome">
        &larr; Go Back Home
      </button>
    </div>
  );
};
export default AddStuffs;
