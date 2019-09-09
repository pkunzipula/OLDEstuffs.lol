import React, { useState } from "react";

const AddStuffs = ({ setScreen, storeStuffs }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const saveStuffs = () => {
    storeStuffs({ title, description });
  };
  const goHome = () => {
    setScreen("homepage");
  };
  return (
    <div className="AddStuffs">
      <h2>Title of Stuffs: {title}</h2>
      <input onChange={event => setTitle(event.target.value)} />
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
