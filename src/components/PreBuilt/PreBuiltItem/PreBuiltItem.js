import { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../../store/cart-context";
import classes from "./PreBuiltItem.module.css";
import PreBuiltItemForm from "./PreBuiltItemForm/PreBuiltItemForm";

const PreBuiltItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      img: props.img,
      cpu: props.cpu,
      gpu: props.gpu,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.item}>
      <Link to={`pre-built/${props.name}`}>
        <img src={props.img} alt="pc tower with purple rgb light" />
        <div className={classes.description}>
          <h3>{props.name}</h3>
          <p>{props.cpu}</p>
          <p>{props.gpu}</p>
        </div>
        <p className={classes.price}>{price}</p>
      </Link>
      <PreBuiltItemForm
        onAddToCart={addToCartHandler}
        onShowCart={props.onShowCart}
        btnType="btnCart"
      />
    </li>
  );
};

export default PreBuiltItem;
