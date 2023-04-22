import { NavLink } from "react-router-dom";

import logo from "../../../assets/black-logo.png";
import classes from "./CheckoutHeader.module.css";

const CheckoutHeader = () => {
  return (
    <div className={classes.header}>
      <ul className={classes["header-links"]}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/cart"
          >
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/checkout/information"
          >
            Information
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/checkout/shipping"
          >
            Shipping
          </NavLink>
        </li>
        {/* <li>
          <NavLink className={({ isActive }) => (isActive ? classes.active : undefined)} to="/checkout/payment">
            Payment
          </NavLink>
        </li> */}
      </ul>
      <img src={logo} alt={"Nemirk pc logo"} className={classes.logo} />
    </div>
  );
};

export default CheckoutHeader;
