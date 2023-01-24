import HeaderCartButton from "./HeaderCartButton";
import Navigations from "../Navigations/Navigations";
import classes from "./Header.module.css";
import Logo from "../Logo/Logo";

const Header = (props) => {
  return (
    <header className={`${classes.header} side-padding`}>
      <Logo />
      <Navigations nav="main-nav" />
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
  );
};

export default Header;
