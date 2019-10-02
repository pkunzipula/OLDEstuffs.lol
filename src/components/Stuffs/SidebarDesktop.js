import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
let moment = require("moment");
const SidebarDesktop = ({
  stuffs,
  showStuffs,
  setShowStuffs,
  setCurrentStuffs,
  setScreen
}) => {
  return (
    <div
      className="container"
      css={css`
        grid-area: sidebar-desktop;
        height: 100%;
        border-right: 1px solid #131a22;
        text-align: left;
        display: grid;
        grid-template-rows: auto 60px;
        position: fixed;
        overflow-y: auto;
        width: 300px;
        @media (max-width: 768px) {
          display: ${showStuffs ? "block" : "none"};
          position: static;
        }
      `}
    >
      <ul
        className="List"
        css={css`
          list-style: none;
          margin: 0;
          padding: 0;
        `}
      >
        {stuffs.map((stuff, index) => {
          return (
            <li
              key={index}
              css={css`
                display: grid;
                grid-template-columns: 80px auto;
                grid-column-gap: 15px;
                grid-area: main;
                cursor: pointer;
                padding: 15px;
                border-bottom: 1px solid #131a22;
                &:hover {
                  color: #febd69;
                  background-color: #131a22;
                }
              `}
              onClick={() => {
                setCurrentStuffs(stuff);
                setShowStuffs(false);
              }}
            >
              <div>
                <span
                  css={css`
                    font-size: 2.1rem;
                    display: block;
                    text-align: center;
                  `}
                >
                  {moment(stuff.datetime).format("D")}
                </span>
                <span
                  css={css`
                    font-size: 1.1rem;
                    display: block;
                    text-align: center;
                  `}
                >
                  {moment(stuff.datetime).format("MMMM")}
                </span>
                {/* <span
                  css={css`
                    font-size: 1rem;
                    display: block;
                    text-align: center;
                  `}
                >
                  {moment(stuff.datetime).format("h:mm a")}
                </span> */}
              </div>
              <div>
                <span
                  css={css`
                    display: block;
                    font-size: 1.2rem;
                  `}
                >
                  {(stuff.sanitizedTitle && stuff.sanitizedTitle) ||
                    stuff.title}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          onClick={() => setScreen("addStuffs")}
          css={css`
            text-align: center;
            font-size: 2rem;
            background: limegreen;
            border: none;
            border-top: 1px solid #131a22;
            outline: none;
            width: 100%;
            height: 100%;
            cursor: pointer;
            &:hover {
              background: #131a22;
              color: #febd69;
            }
          `}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SidebarDesktop;
