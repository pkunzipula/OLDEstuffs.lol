import StuffsLocation from "./StuffsLocation";
import StuffsDate from "./StuffsDate";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const StuffsDetail = ({ showStuffs, currentStuffs }) => {
  console.log(currentStuffs);
  return (
    <div
      className="Detail"
      css={css`
        grid-area: main;
        display: ${showStuffs ? "none" : "block"};
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: auto 200px;
        `}
      >
        <div>
          <h1
            css={css`
              padding-top: 30px;
              padding-bottom: 30px;
              text-align: left;
              margin-left: 50px;
            `}
          >
            {currentStuffs.title}
          </h1>
          <StuffsLocation location={currentStuffs.location} />
        </div>

        <StuffsDate datetime={currentStuffs.datetime} />
      </div>
      <p>{currentStuffs.description}</p>
    </div>
  );
};

export default StuffsDetail;
