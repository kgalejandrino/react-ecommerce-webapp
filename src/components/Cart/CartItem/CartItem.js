import CartContext from "../../../store/cart-context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.img} alt="PC" />
      </div>
      <div className={classes.details}>
        <h5>{props.name}</h5>
        <p className={classes.desc}>{props.cpu}</p>
        <p className={classes.desc}>{props.gpu}</p>
        <p className={classes.price}>{`$${props.price}`}</p>
        <div className="flex">
          <div className={classes.actions}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <span>
            <i className="fas fa-trash-alt"></i>
          </span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
