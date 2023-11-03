import React from "react";

const Logo = ({ logo }) => {
  return (
    <>
      <img className="logo-image" src={logo} alt="logo" />
    </>
  );
};

export default Logo;
