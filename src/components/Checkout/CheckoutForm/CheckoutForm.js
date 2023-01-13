import React from "react";

import classes from "./CheckoutForm.module.css";
import CheckoutInformation from "./CheckoutInformation";
import logo from "../../../assets/black-logo.png";
import Button from "../../UI/Button/Button";

const CheckoutForm = () => {
  return (
    <div className={classes["form-container"]}>
      <ul className={classes["checkout-links"]}>
        <li>Cart</li>
        <li>Information</li>
        <li>Shipping</li>
        <li>Payment</li>
      </ul>
      <img src={logo} alt={"Nemirk pc logo"} className={classes.logo} />
      <CheckoutInformation />
      <div className={`${classes["form-footer"]} flex`}>
        <span>
          <i class="far fa-hand-point-left" aria-hidden="true"></i>
          <a>Return to cart</a>
        </span>
        <Button btnType="secondary" disabled="True" round="round">
          Continue Shipping
        </Button>
      </div>
    </div>
  );
};

export default CheckoutForm;
