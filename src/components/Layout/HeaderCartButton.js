import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.showCart());
  };

  return (
    <div className={classes["header-btn"]}>
      <button className={classes["cart-btn"]} onClick={toggleCartHandler}>
        <span>
          <i className={`fas fa-shopping-cart`}></i>
        </span>
        <p>{cartQuantity}</p>
      </button>
    </div>
  );
};

export default HeaderCartButton;
