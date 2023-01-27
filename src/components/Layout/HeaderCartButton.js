import { Fragment, useContext } from "react";

import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className={classes["header-btn"]}>
      <button className={classes["cart-btn"]} onClick={props.onClick}>
        <span>
          <i className={`fas fa-shopping-cart`}></i>
        </span>
        <p>{numberOfCartItems}</p>
      </button>
      {/* <span className={classes["icon-menu"]}>
        <i
          class="fas fa-bars undefined MainHeader_icon-menu__3obD5"
          aria-hidden="true"
        ></i>
      </span> */}
    </div>
  );
};

export default HeaderCartButton;
