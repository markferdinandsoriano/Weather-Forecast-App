import React from "react";

type Props = {};
import classes from "./style.module.css";

const Loader = () => {
  return (
    <div className={classes["lds-ripple"]}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
