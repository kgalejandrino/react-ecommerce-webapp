import React, { Fragment } from "react";
import Footer from "../Footer/Footer";

import Header from "./Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header onShowCart={props.onShowCart} />
      <main className="main-top--padding">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
