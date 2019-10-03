import StuffsLocation from "./StuffsLocation";
import StuffsDate from "./StuffsDate";
import xss, { cssFilter } from "xss";
import { navigate } from "@reach/router";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const StuffsDetail = ({
  showStuffs,
  currentStuffs,
  setCurrentStuffs,
  reloadStuffs,
  deleteStuffs,
  stuffs,
  stuffsId
}) => {
  if (!currentStuffs) {
    // const defaultStuff = stuffs.filter(item => {
    //   return item.key === parseInt(stuffsId);
    // });
    // setCurrentStuffs(defaultStuff);
    return "<div></div>";
  }
  const handleDeleteStuffs = () => {
    if (!window.confirm("Do you really want to do that!?")) {
      return;
    }
    deleteStuffs(currentStuffs.key);
    reloadStuffs();
    navigate("stuffs");
    setCurrentStuffs(null);
  };
  return (
    <div
      className="Detail"
      css={css`
        grid-area: main;
        display: ${showStuffs ? "unset" : "block"};
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-rows: 80px unset;
          gap: 40px;
          margin: 0 unset;
          padding: 20px;
        `}
      >
        <div>
          <button
            // onClick={saveStuffs}
            css={css`
              background-color: limegreen;
              font-family: Fresca;
              font-size: 2.1rem;
              padding: 0.4rem 1rem;
              float: right;
              color: white;
              outline: unset;
              border-color: transparent;
            `}
          >
            Edit!
          </button>
          <button
            onClick={handleDeleteStuffs}
            css={css`
              background-color: crimson;
              color: white;
              font-size: 1.4rem;
              font-family: Fresca;
              float: left;
              outline: unset;
              padding: 0.4rem;
              border-color: transparent;
            `}
          >
            Delete
          </button>
        </div>
        <div
          css={css`
            display: grid;
            grid-template-columns: unset 123px;
            gap: 40px;
          `}
        >
          <div>
            <h1
              css={css`
                padding-top: 30px;
                padding-bottom: 30px;
                text-align: left;
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
            -webkit-touch-callout: text;
            -webkit-user-select: text;
            -khtml-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text;
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
    </div>
  );
};

export default StuffsDetail;
