import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCard = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  sessionStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cart.cartItems)
  );
};

export const removeFromCart = (productId) => async (disptach, getState) => {
  disptach({ type: CART_REMOVE_ITEM, payload: productId });
  sessionStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
