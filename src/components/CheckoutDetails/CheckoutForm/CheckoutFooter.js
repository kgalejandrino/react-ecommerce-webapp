import { useParams } from "react-router-dom";

import classes from "./CheckoutFooter.module.css";
import Button from "../../UI/Button/Button";

const CheckoutFooter = (props) => {
  const params = useParams();

  let prev = "cart";
  let next = "Continue shipping";

  if (params.link_id === "shipping") {
    prev = "information";
    next = "Confirm order";
  }

  return (
    <div className={classes["form-footer"]}>
      <span>
        <i className="far fa-hand-point-left" aria-hidden="true"></i>
        <a href="#return">Return to {prev}</a>
      </span>
      <Button
        btnType="secondary"
        round="round"
        disabled={!props.validated ? true : false}
      >
        {next}
      </Button>
    </div>
  );
};

export default CheckoutFooter;
