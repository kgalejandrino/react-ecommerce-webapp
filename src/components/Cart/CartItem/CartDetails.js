import { Fragment } from "react";

import classes from "./CartDetails.module.css";

const CartDetails = (props) => {
  return (
    <Fragment>
      <div className={`${classes.details} ${classes[props.cart]}`}>
        <h5>{props.name}</h5>
        <p className={classes.desc}>{props.cpu}</p>
        <p className={classes.desc}>{props.gpu}</p>
        <p className={classes.price}>{`$${props.price}`}</p>
        {props.children}
      </div>
    </Fragment>
  );
};

export default CartDetails;
