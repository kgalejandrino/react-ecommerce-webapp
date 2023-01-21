import React, { Fragment } from "react";

import classes from "./ClickedPreBuiltDetails.module.css";

const ClickedPreBuiltDetails = (props) => {
  return (
    <Fragment>
      <h3
        className={classes.name}
      >{`${props.item.name} - ${props.item.cpu}, ${props.item.gpu}`}</h3>
      <p className={classes.price}>{`$${props.item.price}`}</p>
      <div className={classes.specs}>
        <li>
          <span>Motherboard:</span>
          <span>{props.item.motherboard}</span>
        </li>
        <li>
          <span>Ram:</span>
          <span>{props.item.ram}</span>
        </li>
        <li>
          <span>SSD:</span>
          <span>{props.item.ssd}</span>
        </li>
        <li>
          <span>Cpu Cooler:</span>
          <span>{props.item.cpu_cooler}</span>
        </li>
        <li>
          <span>Power Supply:</span>
          <span>{props.item.psu}</span>
        </li>
        <li>
          <span>Case:</span>
          <span>{props.item.case}</span>
        </li>
        <li>
          <span>Operating System:</span>
          <span>{props.item.os}</span>
        </li>
        <li>
          <span>Dimension:</span>
          <span>{props.item.dimension}</span>
        </li>
      </div>
    </Fragment>
  );
};

export default ClickedPreBuiltDetails;
