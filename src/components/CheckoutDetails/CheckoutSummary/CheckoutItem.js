import React from "react";

import classes from "./CheckoutItem.module.css";
import img from "../../../assets/pre-built1.png";

const CheckoutItem = () => {
  return (
    <li className={classes.item}>
      <div className={classes["item-details"]}>
        <div className={classes["img-container"]}>
          <img src={img} alt="test" />
        </div>
        <div className={classes["item-desc"]}>
          <h5>Abs Legend</h5>
          <span>Intel Core i9 11900K 3.50GHz</span>
          <span>Nvidia GeForce RTX 3090 24GB</span>
        </div>
      </div>
      <span className={classes.price}>$4399.99</span>
    </li>
  );
};

export default CheckoutItem;
