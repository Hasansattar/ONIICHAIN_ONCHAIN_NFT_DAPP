import React from "react";

const YokaiTitle = props => {
  return (
    <>
      <div className="yokai-title">
        <div className="yokai">Yokai</div>
        <div className="yokai-space">'</div>
        {props.children}
      </div>
    </>
  );
};

export default YokaiTitle;
