import StuffsLocation from "./StuffsLocation";
import StuffsDate from "./StuffsDate";
import xss from "xss";
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
            {(currentStuffs.sanitizedTitle && currentStuffs.sanitizedTitle) ||
              currentStuffs.title}
          </h1>
          <StuffsLocation location={currentStuffs.location} />
        </div>

        <StuffsDate datetime={currentStuffs.datetime} />
      </div>
      <div
        css={css`
          padding-left: 50px;
          text-align: left;
        `}
        dangerouslySetInnerHTML={{
          __html:
            xss(
              currentStuffs.sanitizedDescription &&
                currentStuffs.sanitizedDescription
            ) || xss(currentStuffs.description)
        }}
      ></div>
    </div>
  );
};

export default StuffsDetail;
