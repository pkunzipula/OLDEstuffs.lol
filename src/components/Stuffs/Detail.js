import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Detail = ({ showStuffs, currentStuffs }) => (
  <div
    className="Detail"
    css={css`
          grid-area: main;
          @media (max-width: 768px) {
          display: ${showStuffs ? "none" : "block"};
        `}
  >
    <h1
      css={css`
        padding-top: 40px;
        padding-bottom: 40px;
      `}
    >
      {currentStuffs.title}
    </h1>
    <p>{currentStuffs.description}</p>
  </div>
);

export default Detail;
