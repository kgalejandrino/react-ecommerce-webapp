import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import SideCart from "../components/Cart/SideCart/SideCart";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../libs/api";

const RootLayout = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showCart]);

  return (
    <Fragment>
      <ScrollToTop />
      {showCart && <SideCart />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
