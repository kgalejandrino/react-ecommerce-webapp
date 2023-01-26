import { Link, useParams } from "react-router-dom";

import classes from "./CheckoutFooter.module.css";
import Button from "../../UI/Button/Button";

const CheckoutFooter = (props) => {
  const params = useParams();

  let prev = "cart";
  let next = "shipping";

  if (params.link_id === "shipping") {
    prev = "information";
    next = "payment";
  } else if (params.link_id === "shipping") {
    prev = "information";
    next = "pay now";
  }

  return (
    <div className={`${classes["form-footer"]} flex`}>
      <span>
        <i className="far fa-hand-point-left" aria-hidden="true"></i>
        <a href="#return">Return to {prev}</a>
      </span>
      <Link to={`/checkout/${next}`}>
        <Button
          btnType="secondary"
          round="round"
          disabled={!props.validated ? true : false}
        >
          Continue {next}
        </Button>
      </Link>
    </div>
  );
};

export default CheckoutFooter;
