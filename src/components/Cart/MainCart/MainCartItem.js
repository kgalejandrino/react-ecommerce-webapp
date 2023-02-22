import CartButton from "../CartItem/CartButton";
import CartDetails from "../CartItem/CartDetails";
import CartImage from "../CartItem/CartImage";
import classes from "./MainCartItem.module.css";

const MainCartItem = (props) => {
  return (
    <tr>
      <td className={classes.details}>
        <CartImage cart="maincart" img={props.img} />
        <CartDetails
          cart="maincart"
          name={props.name}
          cpu={props.cpu}
          gpu={props.gpu}
          price={props.price}
        >
          <CartButton
            cart="mobilecart-btn"
            quantity={props.quantity}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            onRemoveAll={props.onRemoveAll}
          />
        </CartDetails>
      </td>
      <td className={classes.quantity}>
        <CartButton
          cart="maincart-btn"
          quantity={props.quantity}
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
