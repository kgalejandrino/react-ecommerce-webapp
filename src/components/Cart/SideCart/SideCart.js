import { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal";
import CartContext from "../../../store/cart-context";
import classes from "./SideCart.module.css";
import SideCartItem from "./SideCartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeCartItemHandler = (id, type) => {
    if (type === "REMOVE") {
      cartCtx.removeItem(id);
    }
    if (type === "REMOVEALL") {
      cartCtx.removeAllItem(id);
    }
  };

  const cartItems = cartCtx.items.map((item) => (
    <SideCartItem
      key={item.id}
      id={item.id}
      name={item.name}
      img={item.img}
      cpu={item.cpu}
      gpu={item.gpu}
      amount={item.amount}
      price={item.price}
      onAdd={addCartItemHandler.bind(null, item)}
      onRemove={removeCartItemHandler.bind(null, item.id, "REMOVE")}
      onRemoveAll={removeCartItemHandler.bind(null, item.id, "REMOVEALL")}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <div className={`${classes.header}`}>
        <p>Cart</p>
        <span onClick={props.onClose}>
          <i className="fas fa-times"></i>
        </span>
      </div>
      {hasItems ? (
        <ul>{cartItems}</ul>
      ) : (
        <h3 className={classes.empty}>YOUR CART IS CURRENTLY EMPTY</h3>
      )}
      <div className={`${classes.total} flex`}>
        <p>Total</p>
        <p>{totalAmount}</p>
      </div>
      <div className={classes["cart-btns"]}>
        <Link to="/cart" onClick={props.onClose}>
          <Button btnType="primary" disabled={!hasItems}>
            View Cart
          </Button>
        </Link>
        <Link to="/checkout/information" onClick={props.onClose}>
          <Button btnType="secondary" disabled={!hasItems}>
            Checkout
          </Button>
        </Link>
      </div>
    </Modal>
  );
};

export default Cart;
