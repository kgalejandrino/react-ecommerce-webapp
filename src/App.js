import { useEffect, useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

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
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showCart]);

  return (
    <CartProvider>
      <HashRouter basename="/">
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route>
            <Layout onShowCart={showCartHandler}>
              {showCart && <SideCart onClose={hideCartHandler} />}
              <Route path="/" exact component={Home} />
              <Route path="/build-a-pc" component={BuildPc} />
              <Route
                path="/pre-built"
                exact
                component={() => <PreBuilt onShowCart={showCartHandler} />}
              />
              <Route
                path="/pre-built/:prebuilt_id"
                component={() => (
                  <PreBuiltDetail onShowCart={showCartHandler} />
                )}
              />
              <Route path="/support" component={Support} />
              <Route path="/cart" component={Cart} />
            </Layout>
          </Route>
        </Switch>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
