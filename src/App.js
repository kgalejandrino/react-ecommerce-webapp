import { useEffect, useState } from "react";

import Header from "./components/Layout/Header";
import PreBuilt from "./components/PreBuilt/PreBuilt";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Checkout from "./components/Checkout/Checkout";

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
      {/* {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <PreBuilt onShowCart={showCartHandler} /> */}
      <Checkout />
    </CartProvider>
  );
}

export default App;
