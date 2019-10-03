/** @jsx jsx  */
import { css, jsx } from "@emotion/core";
import logo from "../img/logo.svg";
import screenshot from "../img/screenshot.png";
import { navigate } from "@reach/router";

const Homepage = () => {
  const addStuffs = () => {
    navigate("/start-stuffs");
  };
  return (
    <header
      css={css`
        background-color: white;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: black;
      `}
    >
      <img
        css={css`
          height: 35vmin;
          margin-bottom: 5vmin;
          pointer-events: none;
        `}
        src={logo}
        alt="logo"
      />
      <div
        css={css`
          display: grid;
          grid-template-columns: 50% 50%;
          grid-column-gap: 50px;
        `}
      >
        <div className="left">
          <img
            css={css`
              width: 100%;
              max-width: 300px;
            `}
            src={screenshot}
            className="screenshot"
            alt="screenshot"
          />
        </div>
        <div className="right">
          <p
            css={css`
              width: 100%;
              margin-bottom: 20px;
              max-width: 300px;
              text-align: left;
            `}
          >
            Keep track of the Stuffs you do daily in this fun(ish)-to-use app!
          </p>
          <button
            css={css`
              padding: 20px 0;
              width: 100%;
              background: #49ba37;
              color: white;
              font-family: Fresca;
              font-size: 44px;
              outline: none;
              border-color: transparent;
            `}
            onClick={addStuffs}
          >
            Start!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Homepage;
