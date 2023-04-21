import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigations.module.css";

const Navigations = (props) => {
  return (
    <ul className={`${classes[props.nav]}`}>
      <li>
        <NavLink
          to="build-a-pc"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Build a PC
        </NavLink>
      </li>
      <li>
        <NavLink
          to="pre-built"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Pre-Built PC
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="support"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Support
        </NavLink>
      </li> */}
    </ul>
  );
};

export default Navigations;
