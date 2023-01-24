import CartButton from "../CartItem/CartButton";
import CartDetails from "../CartItem/CartDetails";
import CartImage from "../CartItem/CartImage";
import classes from "./MainCartItem.module.css";

const MainCartItem = (props) => {
  return (
    <tr>
      <td className={classes.img}>
        <CartImage cart="main-cart" img={props.img} />
      </td>
      <td className={classes.details}>
        <CartDetails
          name={props.name}
          cpu={props.cpu}
          gpu={props.gpu}
          price={props.price}
        />
      </td>
      <td className={classes.quantity}>
        <CartButton
          cart="maincart-btn"
          amount={props.amount}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
          onRemoveAll={props.onRemoveAll}
        />
      </td>
      <td className={classes.subtotal}>
        <p>{`$${props.price}`}</p>
        <p>USD</p>
      </td>
    </tr>
  );
};

export default MainCartItem;
