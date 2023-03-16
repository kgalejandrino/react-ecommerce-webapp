import { useEffect } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import { loader as prebuiltLoader } from "./pages/PreBuilt";

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import PreBuilt from "./pages/PreBuilt";
import PreBuiltDetail from "./pages/PreBuiltDetail";
import BuildPc from "./pages/BuildPc";
import Support from "./pages/Support";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

let isInitial = true;

const router = createHashRouter([
  { path: "/checkout/:link_id", element: <Checkout /> },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "build-a-pc", element: <BuildPc /> },
      { path: "pre-built/:prebuilt_id", element: <PreBuiltDetail /> },
      {
        path: "pre-built",
        element: <PreBuilt />,
        loader: prebuiltLoader,
      },
      { path: "support", element: <Support /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

function App() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cartItems.changed) {
      dispatch(sendCartData(cartItems));
    }
  }, [cartItems, dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
