import { useSelector } from "react-redux";

import classes from "./CheckoutSummary.module.css";
import CheckoutItem from "../CheckoutSummary/CheckoutItem";
import Button from "../../UI/Button/Button";

const CheckoutSummary = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = useSelector((state) =>
    state.cart.totalPrice.toFixed(2).replace("-0", "0")
  );

  const tax = (subTotal * 0.0725).toFixed(2);
  const total = (+subTotal + +tax + +props.shipping).toFixed(2);

  const cart = cartItems.map((item) => {
    return (
      <CheckoutItem
        key={item.id}
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
      <ul className={classes["item-lists"]}>{cart}</ul>
      <div className={classes.coupon}>
        <input type="text" id="coupon" placeholder="Enter promo code" />
        <Button btnType="secondary" round="round" disabled="true">
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
          <span>{+props.shipping ? `$${props.shipping}` : "Free"}</span>
        </div>
        <div className={`${classes["text-receipt"]} flex`}>
          <span>Estimated taxes</span>
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
