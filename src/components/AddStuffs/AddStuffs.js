/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useState } from "react";
import MapPicker from "./MapPicker";
import DatePicker from "../StuffsDetail/DatePicker";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
    <div
      className="AddStuffs"
      css={css`
        display: grid;
        grid-template-rows: 100px 150px 640px;
        max-width: 900px;
        margin: 40px auto;
      `}
    >
      <div>
        <button
          onClick={saveStuffs}
          css={css`
            background-color: limegreen;
            font-family: Fresca;
            font-size: 2.2rem;
            padding: 1rem;
            float: right;
            color: white;
            cursor: pointer;
          `}
        >
          Save Your Stuffs!
        </button>
        <button
          onClick={goHome}
          css={css`
            background-color: crimson;
            color: white;
            font-size: 1.4rem;
            font-family: Fresca;
            float: left;
            cursor: pointer;
          `}
        >
          &larr; Go Back Home
        </button>
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 50% 50%;
          column-gap: 25px;
          text-align: center;
        `}
      >
        <div>
          <input
            onChange={event => setTitle(event.target.value)}
            placeholder="Title of Stuffs"
            css={css`
              width: 100%;
              font-family: Fresca;
              font-size: 1.8rem;
              padding: 8px;
              margin-bottom: 90px;
            `}
          />
          <DatePicker datetime={datetime} setDatetime={setDatetime} />
        </div>
        <MapPicker setLocation={setLocation} location={location} />
      </div>
      <div>
        <ReactQuill
          value={description}
          onChange={value => setDescription(value)}
          placeholder="Describe this Stuffs"
          css={css`
            height: 400px;
            font-family: Fresca;
            font-size: 1.5rem;
            margin-top: 90px;
          `}
        />
      </div>
    </div>
  );
};
export default AddStuffs;
