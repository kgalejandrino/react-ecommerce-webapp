import { useState } from "react";

import classes from "./CheckoutDetails.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import CheckoutHeader from "./CheckoutHeader/CheckoutHeader";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";

const CheckoutDetails = () => {
  const [shipping, setShipping] = useState(0);

  const getShipping = (fee) => setShipping(fee);

  return (
    <div className={classes.main}>
      <div className={classes["main-content"]}>
        <div className={classes["form-container"]}>
          <CheckoutHeader />
          <CheckoutForm getShipping={getShipping} />
        </div>
      </div>
      <div className={classes["side-content"]}>
        <CheckoutSummary shipping={shipping} />
      </div>
    </div>
  );
};

export default CheckoutDetails;
