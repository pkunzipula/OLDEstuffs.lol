import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SidebarMobile = ({ setShowStuffs, showStuffs }) => (
  <div
    onClick={() => {
      setShowStuffs(!showStuffs);
    }}
    css={ulStyle}
  >
    <span
      css={css`
        transform-origin: 0% 0%;
      `}
    ></span>
    <span></span>
    <span
      css={css`
        transform-origin: 0% 100%;
      `}
    ></span>
  </div>
);

const ulStyle = css`
  grid-area: sidebar-mobile;
  border-right: 1px solid #131a22;
  height: 100%;
  text-align: left;
  padding: 22px 0 0 22px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #131a22;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
`;

export default SidebarMobile;
