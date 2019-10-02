import { useState } from "react";
import StuffsDetail from "./StuffsDetail/StuffsDetail";
import SidebarMobile from "./Stuffs/SidebarMobile";
import SidebarDesktop from "./Stuffs/SidebarDesktop";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const StuffsList = ({ stuffs, setScreen }) => {
  const [showStuffs, setShowStuffs] = useState("false");
  const [currentStuffs, setCurrentStuffs] = useState({});
  return (
    <div
      className="StuffsList"
      css={css`
        display: grid;
        grid-template-columns: 300px auto;
        grid-template-areas: "sidebar-desktop main";
        width: 100vw;
        height: 100vh;
        color: #131a22;
        
        @media (max-width: 768px) {
          grid-template-columns: 80px auto;
          grid-template-areas: "sidebar-mobile ${
            showStuffs ? "sidebar-desktop" : "main"
          }";
        }
      `}
    >
      <SidebarDesktop
        stuffs={stuffs}
        setShowStuffs={setShowStuffs}
        showStuffs={showStuffs}
        setCurrentStuffs={setCurrentStuffs}
        setScreen={setScreen}
      />
      <SidebarMobile setShowStuffs={setShowStuffs} showStuffs={showStuffs} />
      <StuffsDetail showStuffs={showStuffs} currentStuffs={currentStuffs} />
    </div>
  );
};

export default StuffsList;
