import { useState } from "react";

import classes from "./CheckoutDetails.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import CheckoutHeader from "./CheckoutHeader/CheckoutHeader";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";

const CheckoutDetails = () => {
  const [shipping, setShipping] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const getShipping = (fee) => setShipping(fee);

  const toggleDropdownHandler = () => setShowSummary((prevShow) => !prevShow);

  const dropdown = (
    <div
      className={classes["dropdown-summary"]}
      onClick={toggleDropdownHandler}
    >
      <div className={classes["dropdown-wrap"]}>
        <div className={classes["dropdown-text"]}>
          <span>
            <i class="fas fa-shopping-cart" aria-hidden="true"></i>
          </span>
          <span>Show order summary</span>
          <span>
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </div>
        <span>$2356.49</span>
      </div>
    </div>
  );

  return (
    <div className={classes.wrap}>
      <CheckoutHeader />
      {dropdown}
      <div className={classes["main-wrapper"]}>
        <div className={classes["form-container"]}>
          <CheckoutForm getShipping={getShipping} />
        </div>
        <div
          className={
            showSummary
              ? `${classes["summary-container"]} ${classes.show}`
              : `${classes["summary-container"]}`
          }
        >
          <CheckoutSummary shipping={shipping} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
