import React from "react";
// import "./loader.scss";
import BarLoader from "../images/svg/bar-loading.svg";

const Loader = ({ isShow }) => {
  return isShow ? (
    <div className="container-loader">
      <BarLoader />
    </div>
  ) : null;
};

export default Loader;
