import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigations.module.css";

const Navigations = () => {
  return (
    <ul className={classes.navigations}>
      <li>
        <NavLink activeClassName={classes.active} to="/build-a-pc">
          Build A PC
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/pre-built">
          Pre-Built PC
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/support">
          Support
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigations;
