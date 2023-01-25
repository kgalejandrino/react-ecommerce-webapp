import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  let width = "100%";
  return (
    <div
      className={classes["form-control"]}
      style={props.width ? { width: props.width } : { width: width }}
    >
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.error ? classes.error : ""}
      />
      {props.children}
    </div>
  );
});

export default Input;
