/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import { useState } from "react";
import MapPicker from "./MapPicker";
import DatePicker from "../StuffsDetail/DatePicker";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import xss from "xss";

const AddStuffs = ({ comingFromHomepage, storeStuffs, reloadStuffs }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [datetime, setDatetime] = useState(new Date());
  const [location, setLocation] = useState({
    lat: 36.015964,
    lng: -115.176429
  });
  const saveStuffs = () => {
    if (!title) {
      alert("Please enter a title");
      return;
    }
    const options = {
      whiteList: {
        a: ["href", "title", "target"]
      }
    };
    const sanitizedDescription = xss(description, options);
    const sanitizedTitle = xss(title);
    storeStuffs({
      sanitizedTitle,
      sanitizedDescription,
      location,
      datetime
    });
    reloadStuffs();
    navigate("/stuffs");
  };
  const goHome = () => {
    navigate("/");
  };
  const goToList = () => {
    navigate("stuffs");
  };
  return (
    <div
      className="AddStuffs"
      css={css`
        display: grid;
        grid-template-rows: 100px 150px 640px;
        max-width: 800px;
        margin: 22px auto;

        @media (max-width: 800px) {
          padding: 0 22px;
          grid-template-rows: 100px 350px 640px;
        }
      `}
    >
      <div>
        <button
          onClick={saveStuffs}
          css={css`
            background-color: limegreen;
            font-family: Fresca;
            font-size: 1.4rem;
            padding: 1rem;
            float: right;
            color: white;
            outline: none;
            border-color: transparent;
          `}
        >
          Save Your Stuffs!
        </button>
        {comingFromHomepage ? (
          ""
        ) : (
          <button
            onClick={goToList}
            css={css`
              background-color: crimson;
              color: white;
              font-size: 1.4rem;
              font-family: Fresca;
              float: left;
              outline: none;
              padding: 1rem;
              border-color: transparent;
            `}
          >
            &larr; Go Back Home
          </button>
        )}
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 25px;
          text-align: center;

          @media (max-width: 800px) {
            grid-template-columns: 100%;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <input
            onChange={event => setTitle(event.target.value)}
            placeholder="Title of Stuffs"
            css={css`
              width: 100%;
              font-family: Fresca;
              font-size: 1.8rem;
              padding: 8px;
              margin-bottom: auto;
              @media (max-width: 800px) {
                margin-bottom: 40px;
              }
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
