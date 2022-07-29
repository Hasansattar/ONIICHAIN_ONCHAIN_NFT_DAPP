import React from "react";

const OniiTitle = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <>
      <div className="onii-title">
        <div className="onii">Onii</div>
        <div className="onii-space">'</div>
        {props.children}
      </div>
    </>
  );
};

export default OniiTitle;
