import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import Navigations from "../Navigations/Navigations";
import classes from "./Header.module.css";
import mainLogo from "../../assets/white-main-logo.png";

const Header = (props) => {
  return (
    <header className={`${classes.header} side-padding`}>
      <div className={classes["logo-container"]}>
        <img src={mainLogo} alt="Nemirk PC Logo" />
      </div>
      <Navigations />
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
  );
};

export default Header;
