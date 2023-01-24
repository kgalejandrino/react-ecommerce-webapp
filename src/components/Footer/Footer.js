import classes from "./Footer.module.css";

import Navigations from "../Navigations/Navigations";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className={`${classes.footer} side-padding`}>
      <div className={classes["footer-body"]}>
        <div className={`${classes["footer-card"]} ${classes.socials}`}>
          <Logo />
          <p>
            Not your typical pc build. We believed building pc is art and every
            build is treated as such.
          </p>
          <span>
            <i className="fab fa-facebook-square" aria-hidden="true"></i>
          </span>
          <span>
            <i className="fab fa-instagram-square" aria-hidden="true"></i>
          </span>
        </div>
        <div className={`${classes["footer-card"]} ${classes.links}`}>
          <p className={classes["footer-title"]}>Links</p>
          <Navigations nav="footer-nav" />
        </div>
        <div className={`${classes["footer-card"]} ${classes.newsletter}`}>
          <p className={classes["footer-title"]}>Newsletter</p>
          <p>Stay up to date and don't miss out good deals!</p>
          <Input type="text" id="email" placeholder="Email address" />
          <Button btnType="primary">Subscribe</Button>
        </div>
      </div>
      <div className={classes["footer-end"]}>
        <p>Terms of Use</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <p className={classes.copyright}>
        © 2021 NemirkPcBuilds. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
