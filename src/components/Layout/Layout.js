import React, { Fragment } from "react";

import Header from "./Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header onShowCart={props.onShowCart} />
      <main className="main-top--padding">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
