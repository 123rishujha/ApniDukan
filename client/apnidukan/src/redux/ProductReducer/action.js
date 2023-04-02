import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";
import axios from "axios";
import * as api from './api';

const getProductRequestObj = () => {
  return { type: GET_PRODUCT_REQUEST };
};

const getProductSuccessObj = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};

const getProductErrorObj = () => {
  return { type: GET_PRODUCT_ERROR };
};

export const getProducts = (obj) => async (dispatch) => {
  // console.log("action",obj.params)
  dispatch(getProductRequestObj());
  // console.log("action token",`Bearer ${localStorage.getItem("apnidukan")}`);
  axios
    .get("http://localhost:8080/products", {
      params:obj,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
      },
    })
    .then((res) => {
      dispatch(getProductSuccessObj(res.data));
      console.log(res.data)
    })
    .catch((err) => {
      dispatch(getProductErrorObj());
    });

  // try{
  //   console.log("check",obj);
  //   const res = await api.getPro();
  //   console.log(res.data);
  //   // dispatch(getProductSuccessObj(res.data));
  // }
  // catch(err){
  //   dispatch(getProductErrorObj());
  // }

};


