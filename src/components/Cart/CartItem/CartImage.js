import classes from "./CartImage.module.css";

const CartImage = (props) => {
  return (
    <div className={`${classes.cart} ${classes[props.cart]}`}>
      <img src={props.img} alt="PC" />
    </div>
  );
};

export default CartImage;
