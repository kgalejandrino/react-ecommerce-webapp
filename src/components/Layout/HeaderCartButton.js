import { useContext } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const dispatch = useDispatch();

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const toggleCartHandler = () => {
    dispatch(uiActions.showCart());
  };

  return (
    <div className={classes["header-btn"]}>
      <button className={classes["cart-btn"]} onClick={toggleCartHandler}>
        <span>
          <i className={`fas fa-shopping-cart`}></i>
        </span>
        <p>{numberOfCartItems}</p>
      </button>
    </div>
  );
};

export default HeaderCartButton;
