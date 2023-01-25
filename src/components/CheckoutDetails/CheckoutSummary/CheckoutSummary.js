import React, { useContext } from "react";

import classes from "./CheckoutSummary.module.css";
import CartContext from "../../../store/cart-context";
import CheckoutItem from "../CheckoutSummary/CheckoutItem";
import Button from "../../UI/Button/Button";

const CheckoutSummary = () => {
  const cartCtx = useContext(CartContext);

  const subTotal = cartCtx.totalAmount.toFixed(2);
  const tax = (subTotal * 0.0725).toFixed(2);
  const total = (+subTotal + +tax).toFixed(2);

  const cartItems = cartCtx.items.map((item) => {
    return (
      <CheckoutItem
        img={item.img}
        name={item.name}
        cpu={item.cpu}
        gpu={item.gpu}
        price={item.price}
      />
    );
  });

  return (
    <div className={classes.summary}>
      <ul className={classes["item-lists"]}>{cartItems}</ul>
      <div className={classes.coupon}>
        <input type="text" id="coupon" placeholder="Enter promo code" />
        <Button btnType="secondary" round="round" disabled="True">
          Apply
        </Button>
      </div>
      <div className={classes["order-receipt"]}>
        <div className={`${classes["text-receipt"]} flex`}>
          <span>Subtotal</span>
          <span>{`$${subTotal}`}</span>
        </div>
        <div className={`${classes["text-receipt"]} flex`}>
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className={`${classes["text-receipt"]} flex`}>
          <span>Taxes(estimated)</span>
          <span>{`$${tax}`}</span>
        </div>
      </div>
      <div className={`${classes["text-receipt"]} flex`}>
        <span>Total</span>
        <span className={classes.total}>{`$${total}`}</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
