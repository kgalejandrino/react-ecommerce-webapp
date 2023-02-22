import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { cartActions } from "../../../store/cart-slice";

import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import SideCartItem from "./SideCartItem";
import classes from "./SideCart.module.css";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) =>
    state.cart.totalPrice.toFixed(2).replace("-0", "0")
  );

  const hasItems = cartItems.length > 0;

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
    <SideCartItem
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

  const closeCarthandler = () => {
    dispatch(uiActions.hideCart());
  };

  return (
    <Modal modal="side-modal">
      <div className={`${classes.header}`}>
        <p>Cart</p>
        <span onClick={closeCarthandler}>
          <i className="fas fa-times"></i>
        </span>
      </div>
      {hasItems ? (
        <ul>{cart}</ul>
      ) : (
        <h3 className={classes.empty}>YOUR CART IS CURRENTLY EMPTY</h3>
      )}
      <div className={`${classes.total} flex`}>
        <p>Total</p>
        <p>{`$${cartTotalPrice}`}</p>
      </div>
      <div className={classes["cart-btns"]}>
        <Link to="/cart" onClick={closeCarthandler}>
          <Button btnType="primary" disabled={!hasItems}>
            View Cart
          </Button>
        </Link>
        <Link to="/checkout/information" onClick={closeCarthandler}>
          <Button btnType="secondary" disabled={!hasItems}>
            Checkout
          </Button>
        </Link>
      </div>
    </Modal>
  );
};

export default Cart;
