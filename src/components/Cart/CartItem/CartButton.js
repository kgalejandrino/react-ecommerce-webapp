import classes from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <div className={`${classes["cart-button"]} ${classes[props.cart]}`}>
      <div className={classes.actions}>
        <button
          onClick={props.onRemove}
          disabled={props.quantity === 1 ? true : false}
        >
          -
        </button>
        <span>{props.quantity}</span>
        <button onClick={props.onAdd}>+</button>
      </div>
      <span className={classes.remove} onClick={props.onRemoveAll}>
        <i className="fas fa-trash-alt"></i>
      </span>
    </div>
  );
};

export default CartButton;
