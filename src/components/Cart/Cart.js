import { useContext } from "react";

import Button from "../UI/Button/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const carCtx = useContext(CartContext);

  const totalAmount = `$${carCtx.totalAmount.toFixed(2)}`;
  const hasItems = carCtx.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      <div className={`${classes.header}`}>
        <p>Cart</p>
        <span onClick={props.onClose}>
          <i className="fas fa-times"></i>
        </span>
      </div>
      {hasItems ? (
        <ul>
          {carCtx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              img={item.img}
              cpu={item.cpu}
              gpu={item.gpu}
              price={item.price}
            />
          ))}
        </ul>
      ) : (
        <h3 className={classes.empty}>YOUR CART IS CURRENTLY EMPTY</h3>
      )}
      <div className={`${classes.total} flex`}>
        <p>Total</p>
        <p>{totalAmount}</p>
      </div>
      <div className={classes["cart-btns"]}>
        {/* <Button btnType="primary">View Cart</Button> */}
        <Button btnType="secondary" disabled={hasItems}>
          Checkout
        </Button>
      </div>
    </Modal>
  );
};

export default Cart;
