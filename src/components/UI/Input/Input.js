import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  let width = "100%";
  return (
    <div
      className={classes["form-control"]}
      style={props.width ? { width: props.width } : { width: width }}
    >
      <input type={props.type} id={props.id} placeholder={props.placeholder}>
        {props.children}
      </input>
    </div>
  );
};

export default Input;
