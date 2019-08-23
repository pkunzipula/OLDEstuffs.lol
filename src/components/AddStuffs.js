import React, { useState } from "react";

const AddStuffs = ({ storeStuffs }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const saveStuffs = () => {
    storeStuffs({ title, description });
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
    </div>
  );
};
export default AddStuffs;
