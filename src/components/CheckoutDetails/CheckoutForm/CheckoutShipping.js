import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./CheckoutShipping.module.css";

const CheckoutShipping = (props) => {
  return (
    <Fragment>
      <div className={classes["shipping-box"]}>
        <div className={classes["edit"]}>
          <div className={classes["edit-info"]}>
            <span>Contact</span>
            <span>nikevs16@yahoo.com</span>
          </div>
          <Link to="/checkout/information" onClick={props.changeContact}>
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
          <Link to="/checkout/information" onClick={props.changeAddress}>
            <span className={classes["edit-btn"]}>Change</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default CheckoutShipping;
