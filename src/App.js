import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import CartProvider from "./store/CartProvider";
import SideCart from "./components/Cart/SideCart/SideCart";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import PreBuilt from "./pages/PreBuilt";
import PreBuiltDetail from "./pages/PreBuiltDetail";
import BuildPc from "./pages/BuildPc";
import Support from "./pages/Support";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showCart]);

  return (
    <CartProvider>
      <Switch>
        <Route path="/checkout/:link_id" component={Checkout} />
        <Route>
          <Layout>
            {showCart && <SideCart />}
            <Route path="/" exact component={Home} />
            <Route path="/build-a-pc" component={BuildPc} />
            <Route path="/pre-built" exact component={PreBuilt} />
            <Route path="/pre-built/:prebuilt_id" component={PreBuiltDetail} />
            <Route path="/support" component={Support} />
            <Route path="/cart" component={Cart} />
          </Layout>
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
