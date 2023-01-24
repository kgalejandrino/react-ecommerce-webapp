import React, { Fragment } from "react";

import Footer from "../Footer/Footer";
import Header from "./Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Header onShowCart={props.onShowCart} />
      <main className={`${classes.main} main-top--padding`}>
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
