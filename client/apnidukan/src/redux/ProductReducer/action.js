import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";
import axios from "axios";

const getProductRequestObj = () => {
  return { type: GET_PRODUCT_REQUEST };
};

const getProductSuccessObj = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};

const getProductErrorObj = () => {
  return { type: GET_PRODUCT_ERROR };
};

export const getProducts =  (obj) => (dispatch) => {
  dispatch(getProductRequestObj());
  axios
    .get("http://localhost:8080/products", {
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
};


