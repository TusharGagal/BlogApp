/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Logo = ({ width = "100px" }) => {
  return (
    <div>
      <img src="./logo.png" alt="Logo" width={width} />
    </div>
  );
};

export default Logo;
