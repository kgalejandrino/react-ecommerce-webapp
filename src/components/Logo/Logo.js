import classes from "./Logo.module.css";

import logo from "../../assets/white-main-logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={classes["logo-container"]}>
      <Link to="/">
        <img src={logo} alt="Nemirk PC Logo" />
      </Link>
    </div>
  );
};

export default Logo;
