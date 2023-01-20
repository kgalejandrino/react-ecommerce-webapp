import React from "react";

import classes from "./PreBuiltItemForm.module.css";
import Button from "../../../UI/Button/Button";

const PreBuiltItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();

    props.onShowCart();
    props.onAddToCart(1);
  };

  return (
    <form className={classes.cart} onSubmit={submitHandler}>
      <Button btnType="btnCart" round="round">
        Add to Cart
      </Button>
    </form>
  );
};

export default PreBuiltItemForm;
