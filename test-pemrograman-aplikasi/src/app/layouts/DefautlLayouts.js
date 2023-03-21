import React from "react";
import './DefaultLayouts.css'

const DefaultLayouts = ({ children }) => {
  return (
    <>
      <div className="container">
        {children}
      </div>
    </>
  );
};

export default DefaultLayouts;
