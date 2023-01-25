import { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";

import classes from "./CheckoutForm.module.css";
import CheckoutInformation from "./CheckoutInformation";
import Button from "../../UI/Button/Button";
import CheckoutShipping from "./CheckoutShipping";

const CheckoutForm = () => {
  const params = useParams();
  const [formIsValid, setFormIsValid] = useState(false);

  const validateForm = () => {
    setFormIsValid(true);
  };

  const renderForm = <CheckoutInformation validate={validateForm} />;

  if (params.link_id === "shipping") {
    renderForm = <CheckoutShipping />;
  }

  return (
    <Fragment>
      {renderForm}
      <div className={`${classes["form-footer"]} flex`}>
        <span>
          <i className="far fa-hand-point-left" aria-hidden="true"></i>
          <a href="#return">Return to cart</a>
        </span>
        <Link to="/checkout/shipping">
          <Button btnType="secondary" round="round" disabled={!formIsValid}>
            Continue Shipping
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default CheckoutForm;
