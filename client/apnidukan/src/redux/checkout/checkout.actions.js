import * as types from "./checkout.types";
import * as api from "./api";

//action objects below
export const checkoutRequest = () => {
  return { type: types.REQUEST };
};

export const checkoutError = () => {
  return { type: types.ERROR };
};

export const getSuccess = (payload) => {
  return { type: types.CHECKOUT_GET_SUCCESS, payload };
};

// main function to perform curd operations
export const getCheckoutSuccess = (params) => async (dispatch) => {
  dispatch(checkoutRequest());
  try {
    const res = await api.getCheckout(params);
    console.log("checkout actions",res.data.data);
    dispatch(getSuccess(res.data.data));
  } catch (err) {
    dispatch(checkoutError());
  }
};

