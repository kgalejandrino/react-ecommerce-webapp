import { Link } from "react-router-dom";
import { Fragment } from "react";

import classes from "./Logo.module.css";
import logo from "../../assets/white-main-logo.png";
import mobileLogo from "../../assets/white-mobile-logo.png";

const Logo = () => {
  return (
    <Fragment>
      <Link to="/">
        <img
          src={logo}
          alt="Nemirk Pc Logo with text"
          className={classes["main-logo"]}
        />
        <img
          src={mobileLogo}
          alt="Nemirk Pc logo without text"
          className={classes["mobile-logo"]}
        />
      </Link>
    </Fragment>
  );
};

export default Logo;
