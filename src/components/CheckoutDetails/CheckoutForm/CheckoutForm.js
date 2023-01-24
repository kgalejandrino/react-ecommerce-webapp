import { NavLink, useHistory, useLocation } from "react-router-dom";

import classes from "./CheckoutForm.module.css";
import CheckoutInformation from "./CheckoutInformation";
import logo from "../../../assets/black-logo.png";
import Button from "../../UI/Button/Button";

const CheckoutForm = () => {
  const location = useLocation();
  const history = useHistory();

  console.log(location);
  console.log(history);
  return (
    <div className={classes["form-container"]}>
      <ul className={classes["checkout-links"]}>
        <li>
          <NavLink activeClassName={classes.active} to="/cart">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/checkout/information">
            Information
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/checkout/shipping">
            Shipping
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/checkout/payment">
            Payment
          </NavLink>
        </li>
      </ul>
      <img src={logo} alt={"Nemirk pc logo"} className={classes.logo} />
      <CheckoutInformation />
      <div className={`${classes["form-footer"]} flex`}>
        <span>
          <i class="far fa-hand-point-left" aria-hidden="true"></i>
          <a href="#return">Return to cart</a>
        </span>
        <Button btnType="secondary" disabled="True" round="round">
          Continue Shipping
        </Button>
      </div>
    </div>
  );
};

export default CheckoutForm;
