/** @jsx jsx */
import { css, jsx } from "@emotion/core";
let moment = require("moment");

const StuffsDate = ({ datetime }) => {
  let month = moment(datetime).format("MMMM");
  let day = moment(datetime).format("D");
  let time = moment(datetime).format("h:mm a");
  if (!datetime) {
    return <div></div>;
  }
  return (
    <div
      className="StuffsDate"
      css={css`
        margin-top: 30px;
      `}
    >
      <span
        css={css`
          font-size: 4rem;
          display: block;
        `}
      >
        {day}
      </span>
      <span
        css={css`
          font-size: 1.8rem;
          display: block;
        `}
      >
        {month}
      </span>
      <span
        css={css`
          font-size: 1.4rem;
          display: block;
        `}
      >
        {time}
      </span>
    </div>
  );
};

export default StuffsDate;
