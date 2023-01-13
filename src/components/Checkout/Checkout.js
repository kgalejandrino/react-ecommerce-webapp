import React from "react";

import classes from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";

const Checkout = () => {
  return (
    <div className={classes.main}>
      <div className={classes["main-content"]}>
        <CheckoutForm />
      </div>
      <div className={classes["side-content"]}>
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default Checkout;
