import { useState } from "react";

import HeaderCartButton from "./HeaderCartButton";
import Navigations from "../Navigations/Navigations";
import classes from "./Header.module.css";
import Logo from "../Logo/Logo";

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => setShowMenu(!showMenu);

  return (
    <header className={`${classes.header}`}>
      <div className={`row flex`}>
        <span className={classes["icon-menu"]} onClick={showMenuHandler}>
          <i className="fas fa-bars" aria-hidden="true"></i>
        </span>
        <Logo />
        <nav
          className={
            showMenu
              ? `${classes["collapse-nav"]} ${classes.open}`
              : `${classes["collapse-nav"]} ${classes.close}`
          }
        >
          <Navigations nav="main-nav" />
        </nav>
        <HeaderCartButton />
      </div>
    </header>
  );
};

export default Header;
