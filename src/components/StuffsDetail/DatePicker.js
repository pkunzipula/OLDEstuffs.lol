import { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Grid from "@material-ui/core/Grid";

const DatePicker = ({ datetime, setDatetime }) => {
  const setNewDatetime = newDatetime => {
    setDatetime(newDatetime.toDate());
  };

  return (
    <div
      css={css`
        width: 100%;
        text-align: left;
      `}
    >
      <h2
        css={css`
          font-weight: normal;
        `}
      >
        Date & Time
      </h2>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePicker
          value={datetime}
          onChange={setNewDatetime}
          css={css`
            width: 100%;
            @media (max-width: 800px) {
              margin-top: 0;
            }
          `}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DatePicker;
