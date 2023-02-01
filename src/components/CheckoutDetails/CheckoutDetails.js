import { useState, useRef, useEffect } from "react";

import classes from "./CheckoutDetails.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import CheckoutHeader from "./CheckoutHeader/CheckoutHeader";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";

const CheckoutDetails = () => {
  const [shipping, setShipping] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const dropdownRef = useRef(null);

  const getShipping = (fee) => setShipping(fee);

  const toggleDropdownHandler = () => {
    setShowSummary((prevShow) => !prevShow);
    setDropdownActive(true);
  };

  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownActive(false);
      }
    };
    document.addEventListener("click", clickOutsideHandler);
    return () => document.removeEventListener("click", clickOutsideHandler);
  }, [dropdownRef]);

  const dropdown = (
    <div
      className={classes["dropdown-summary"]}
      onClick={toggleDropdownHandler}
      ref={dropdownRef}
    >
      <div className={classes["dropdown-wrap"]}>
        <div
          className={
            dropdownActive
              ? `${classes["dropdown-text"]} ${classes.active}`
              : classes["dropdown-text"]
          }
        >
          <span>
            <i className="fas fa-shopping-cart" aria-hidden="true"></i>
          </span>
          <span>
            {showSummary ? "Hide order summary" : "Show order summary"}
          </span>
          <span>
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </div>
        <span className={classes["dropdown-price"]}>$2356.49</span>
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
