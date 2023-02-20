import { useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui-slice";

import classes from "./PreBuiltItemForm.module.css";
import Button from "../../../UI/Button/Button";

const PreBuiltItemForm = (props) => {
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(uiActions.showCart());
    props.onAddToCart(1);
  };

  return (
    <form className={classes.cart} onSubmit={submitHandler}>
      <Button btnType={props.btnType} round="round">
        Add to Cart
      </Button>
    </form>
  );
};

export default PreBuiltItemForm;
