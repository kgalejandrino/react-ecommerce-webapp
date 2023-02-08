import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import CheckoutFooter from "./CheckoutFooter";
import classes from "./CheckoutShipping.module.css";

const CheckoutShipping = (props) => {
  const shippingChangeHandler = (event) => {
    props.getShipping(event.target.value);
  };

  const expressPrice = 5.99;

  return (
    <Fragment>
      <div className={classes["shipping-box"]}>
        <div className={classes["edit"]}>
          <div className={classes["edit-info"]}>
            <span>Contact</span>
            <span>nikevs16@yahoo.com</span>
          </div>
          <Link to="/checkout/information" onClick={props.editContact}>
            <span className={classes["edit-btn"]}>Change</span>
          </Link>
        </div>
        <div className={classes["edit"]}>
          <div className={classes["edit-info"]}>
            <span>Ship to</span>
            <span>
              2049 S. San Joaquin St., Apt. 214, Apt. 214, Stockton CA 95206,
              United States
            </span>
          </div>
          <Link to="/checkout/information" onClick={props.editAddress}>
            <span className={classes["edit-btn"]}>Change</span>
          </Link>
        </div>
      </div>
      <h3 className={classes.title}>Shipping Method</h3>
      <div className={classes["shipping-box"]}>
        <div className={classes.methods}>
          <div className={classes["method-info"]}>
            <input
              type="radio"
              id="express"
              name="method"
              value="5.99"
              onChange={shippingChangeHandler}
            />
            <label htmlFor="express">
              Express Delivery (1 - 3 Working Days)
            </label>
          </div>
          <span className={classes.price}>{`$${expressPrice}`}</span>
        </div>
        <div className={classes.methods}>
          <div className={classes["method-info"]}>
            <input
              type="radio"
              id="standard"
              name="method"
              value="0"
              onChange={shippingChangeHandler}
              defaultChecked={true}
            />
            <label htmlFor="standard">
              Standard Delivery (4 - 7 Working Days)
            </label>
          </div>
          <span className={classes.price}>Free</span>
        </div>
      </div>
      <CheckoutFooter validated={true} />
    </Fragment>
  );
};

export default CheckoutShipping;
