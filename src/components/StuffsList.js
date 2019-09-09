import React from "react";

const StuffsList = ({ stuffs }) => {
  return (
    <div className="StuffsList">
      <ul className="List">
        {stuffs.map((stuff, index) => {
          return <li key={index}>{stuff.title}</li>;
        })}
      </ul>
      <div className="Detail"></div>
    </div>
  );
};

export default StuffsList;
