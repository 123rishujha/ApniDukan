import * as types from "./cart.types";
import * as api from "./api";

//action objects below
export const cartRequest = () => {
  return { type: types.REQUEST };
};

export const cartError = () => {
  return { type: types.ERROR };
};

export const getSuccess = (payload) => {
  return { type: types.CART_GET_SUCCESS, payload };
};

export const removeSuccess = () => {
  return { type: types.CART_REMOVE_SUCCESS };
};

export const updateSuccess = () => {
  return { type: types.CART_UPDATE_SUCCESS };
};

// main function to perform curd operations
export const getCartSuccess = () => async (dispatch) => {
  dispatch(cartRequest());
  try {
    const res = await api.getCart();
    console.log("actions",res.data.data);
    dispatch(getSuccess(res.data.data));
  } catch (err) {
    dispatch(cartError());
  }
};

export const postCartSuccess = (payload) => async (dispatch) => {
  dispatch(cartRequest());
  try {
    const res = await api.postCart(payload);
    dispatch(getSuccess());
  } catch (err) {
    dispatch(cartError());
  }
};

export const updateCartSuccess = (id, payload) => async (dispatch) => {
  dispatch(cartRequest());
  try {
    const res = await api.updateCart(id, payload);
    dispatch(getCartSuccess());
  } catch (err) {
    dispatch(cartError());
  }
};

export const deleteCartSuccess = (id) => async (dispatch) => {
  dispatch(cartRequest());
  try {
    const res = await api.deleteCart(id);
    dispatch(getCartSuccess());
  } catch (err) {
    dispatch(cartError());
  }
};
