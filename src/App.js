import { useEffect, useState } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import PreBuilt from "./pages/PreBuilt";
import BuildPc from "./pages/BuildPc";
import Support from "./pages/Support";
import "./App.css";

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
      <Switch>
        <Route>
          <Layout onShowCart={showCartHandler}>
            {showCart && <Cart onClose={hideCartHandler} />}
            <Route path="/" exact component={Home} />
            <Route path="/build-a-pc" component={BuildPc} />
            <Route
              path="/pre-built"
              component={() => <PreBuilt onShowCart={showCartHandler} />}
            />
            <Route path="/support" component={Support} />
          </Layout>
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
