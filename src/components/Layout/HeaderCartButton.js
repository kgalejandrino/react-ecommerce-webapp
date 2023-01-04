import { useContext } from "react";

import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes["cart-button"]} onClick={props.onClick}>
      <span>
        <i className={`fas fa-shopping-cart`}></i>
      </span>
      <p>{numberOfCartItems}</p>
    </button>
  );
};

export default HeaderCartButton;
