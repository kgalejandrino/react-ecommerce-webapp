import CartDetails from "../CartItem/CartDetails";
import CartButton from "../CartItem/CartButton";
import CartImage from "../CartItem/CartImage";
import classes from "./SideCartItem.module.css";

const SideCartItem = (props) => {
  return (
    <li className={classes.item}>
      <CartImage cart="sidecart" img={props.img} />
      <CartDetails
        cart="sidecart"
        name={props.name}
        img={props.img}
        cpu={props.cpu}
        gpu={props.gpu}
        price={props.price}
      >
        <CartButton
          cart="sidecart-btn"
          quantity={props.quantity}
          onRemove={props.onRemove}
          onAdd={props.onAdd}
          onRemoveAll={props.onRemoveAll}
        />
      </CartDetails>
    </li>
  );
};

export default SideCartItem;
