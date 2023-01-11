import React from "react";

import classes from "./PreBuiltItemForm.module.css";

const PreBuiltItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddToCart(1);
  };

  return (
    <form className={classes.cart} onSubmit={submitHandler}>
      <button onClick={props.onShowCart}>Add to Cart</button>
    </form>
  );
};

export default PreBuiltItemForm;
