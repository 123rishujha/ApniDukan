import * as types from "./order.types";
import * as api from "./api";

//action objects below
export const orderRequest = () => {
  return { type: types.REQUEST };
};

export const orderError = () => {
  return { type: types.ERROR };
};

export const getSuccess = (payload) => {
  return { type: types.ORDER_GET_SUCCESS, payload };
};


// main function to perform curd operations
export const getOrderSuccess = () => async (dispatch) => {
  dispatch(orderRequest());
  try {
    const res = await api.getOrder();
    console.log("order actions",res.data.data);
    dispatch(getSuccess(res.data.data));
  } catch (err) {
    dispatch(orderError());
  }
};

export const postOrderSuccess = (payload) => async (dispatch) =>{
  dispatch(orderRequest());
  try{
    const data = await api.postOrder(payload);
    dispatch(getOrderSuccess());
  }
  catch(err){
    dispatch(orderError);
  }
};

