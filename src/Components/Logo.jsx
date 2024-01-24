/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo.png";
const Logo = ({ width = " 100%" }) => {
  return (
    <div>
      <img src={logo} alt="Logo" width={width} />
    </div>
  );
};

export default Logo;
