import React from "react";

import classes from "./CheckoutItem.module.css";

const CheckoutItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes["item-details"]}>
        <div className={classes["img-container"]}>
          <img src={props.img} alt="test" />
        </div>
        <div className={classes["item-desc"]}>
          <h5>{props.name}</h5>
          <span>{props.cpu}</span>
          <span>{props.gpu}</span>
        </div>
      </div>
      <span className={classes.price}>{`$${props.price}`}</span>
    </li>
  );
};

export default CheckoutItem;
