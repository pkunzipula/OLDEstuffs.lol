/** @jsx jsx */
import { css, jsx } from "@emotion/core";
let moment = require("moment");

const StuffsDate = ({ datetime }) => {
  let month = moment(datetime).format("MMMM");
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
        {datetime.getDate()}
      </span>
      <span
        css={css`
          font-size: 1.8rem;
        `}
      >
        {month}
      </span>
    </div>
  );
};

export default StuffsDate;
