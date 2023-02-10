import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";

import CheckoutFooter from "./CheckoutFooter";
import classes from "./CheckoutShipping.module.css";
import useLocalStorage from "../../../hooks/use-localStorage";
import useHttp from "../../../hooks/use-http";
import CartContext from "../../../store/cart-context";
import Modal from "../../UI/Modal/Modal";
import Spinner from "../../UI/Spinner/Spinner";
import Button from "../../UI/Button/Button";

const CheckoutShipping = (props) => {
  const { storedValue } = useLocalStorage("user");
  const cartCtx = useContext(CartContext);
  const { isLoading, httpError, fetchData } = useHttp();
  const [didSubmit, setDidSubmit] = useState(false);

  const shippingChangeHandler = (event) => {
    props.getShipping(event.target.value);
  };

  const expressPrice = 5.99;

  let email, address;

  if (storedValue) {
    email = storedValue.email;
    address = `${storedValue.address}, ${storedValue.city} ${storedValue.state} ${storedValue.zipCode}, ${storedValue.country}`;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    fetchData({
      url: "https://react-ecommerce-pcbuilds-default-rtdb.firebaseio.com/orders.json",
      method: "POST",
      body: {
        user: storedValue,
        orders: cartCtx.items,
      },
    });

    setDidSubmit(true);
    localStorage.clear();
  };

  const formContext = (
    <form onSubmit={confirmHandler}>
      <div className={classes["shipping-box"]}>
        <div className={classes["edit"]}>
          <div className={classes["edit-info"]}>
            <span>Contact</span>
            <span>{email}</span>
          </div>
          <Link to="/checkout/information" onClick={props.editContact}>
            <span className={classes["edit-btn"]}>Change</span>
          </Link>
        </div>
        <div className={classes["edit"]}>
          <div className={classes["edit-info"]}>
            <span>Ship to</span>
            <span>{address}</span>
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
      <CheckoutFooter validated={true} type="submit" />
    </form>
  );

  const isSubmittingModalContent = (
    <Modal modal="checkout-modal">
      <Spinner color="#000" />
    </Modal>
  );

  const didSubmitModalContent = (
    <Modal modal="checkout-modal">
      <div className={classes["order-successful"]}>
        <span>
          <i class="fa-regular fa-circle-check"></i>
        </span>
        <p>Order Placed!</p>
        <p>Order information was sent to your email.</p>
        <Button>Done</Button>
      </div>
    </Modal>
  );

  return (
    <Fragment>
      {isLoading && isSubmittingModalContent}
      {!isLoading && didSubmit && didSubmitModalContent}
      {formContext}
    </Fragment>
  );
};

export default CheckoutShipping;
