import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../../store/cart-slice";

import Button from "../../UI/Button/Button";
import MainCartItem from "./MainCartItem";
import classes from "./MainCart.module.css";

const MainCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

  const addCartItemHandler = (item) => {
    dispatch(cartActions.addItemToCart({ ...item }));
  };

  const removeCartItemHandler = (id, type) => {
    if (type === "REMOVE") {
      dispatch(cartActions.removeItemFromCart(id));
    }
    if (type === "REMOVEALL") {
      dispatch(cartActions.removeAllItemFromCart(id));
    }
  };

  const cart = cartItems.map((item) => (
    <MainCartItem
      key={item.id}
      id={item.id}
      name={item.name}
      img={item.img}
      cpu={item.cpu}
      gpu={item.gpu}
      quantity={item.quantity}
      price={item.price}
      onAdd={addCartItemHandler.bind(null, item)}
      onRemove={removeCartItemHandler.bind(null, item.id, "REMOVE")}
      onRemoveAll={removeCartItemHandler.bind(null, item.id, "REMOVEALL")}
    />
  ));

  const mainCartContent = (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart}
          <tr>
            <td colSpan="3">
              <div className={classes.total}>
                <span>Total</span>
                <span>{`$${cartTotalPrice.toFixed(2)}`}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={classes["flex-link"]}>
        <Link to="/pre-built" className={classes.link}>
          <span>
            <i className="far fa-hand-point-left" aria-hidden="true"></i>
            Continue Shopping
          </span>
        </Link>
        <Link to="/checkout/information" className={classes.checkout}>
          <Button btnType="secondary" round="round">
            Checkout
          </Button>
        </Link>
      </div>
    </Fragment>
  );
  return (
    <div className={`${classes["main-cart"]} row`}>
      <h2>Cart</h2>
      {cartItems.length >= 1 ? (
        mainCartContent
      ) : (
        <div className={classes["empty-cart"]}>
          <p>Your cart is currently empty.</p>
          <p>
            Continue browsing <Link to="/pre-built">here</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default MainCart;
