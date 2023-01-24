import { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../../store/cart-context";
import Button from "../../UI/Button/Button";
import classes from "./MainCart.module.css";
import MainCartItem from "./MainCartItem";

const MainCart = () => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

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
    <MainCartItem
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
    <div className={`${classes["main-cart"]} side-padding`}>
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Item</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems}
          <tr>
            <td colSpan="4">
              <div className={classes.total}>
                <span>Total</span>
                <span>{`${totalAmount}`}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex">
        <Link to="/pre-built" className={classes.link}>
          <span>
            <i class="far fa-hand-point-left" aria-hidden="true"></i>Continue
            Shopping
          </span>
        </Link>
        <Link to="/checkout" className={classes.checkout}>
          <Button btnType="secondary" round="round">
            Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MainCart;
