import { cartActions } from "./cart-slice";

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-ecommerce-pcbuilds-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartData.items,
            totalQuantity: cartData.totalQuantity,
            totalPrice: cartData.totalPrice,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    sendRequest();
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-ecommerce-pcbuilds-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      const data = await response.json();

      return data;
    };

    const cartData = await fetchData();
    dispatch(
      cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity,
        totalPrice: cartData.totalPrice,
      })
    );
  };
};
