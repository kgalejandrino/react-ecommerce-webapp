import React from "react";

import classes from "./Navigations.module.css";

const Navigations = () => {
  return (
    <ul className={classes.navigations}>
      <li>
        <a href="#">Build A PC</a>
      </li>
      <li>
        <a href="#">Pre-Built PC</a>
      </li>
      <li>
        <a href="#">Support</a>
      </li>
    </ul>
  );
};

export default Navigations;
