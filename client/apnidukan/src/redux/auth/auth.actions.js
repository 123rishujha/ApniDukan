import * as types from "./auth.types";
import axios from "axios";

//action function
export const authError = () => {
  return { type: types.ERROR };
};

export const authRequest = () => {
  return { type: types.REQUEST };
};

export const authSuccess = (payload) => {
  return { type: types.AUTH_SUCCESS, payload };
};

export const registrationSuccess = () => {
  return { type: types.REGISTRATION_SUCCESS };
};

//main functions
//register
export const registerUser = (payload) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/register`,payload);
    if (res.data.success) {
        console.log(res);
      dispatch(registrationSuccess());
    } else {
      dispatch(authError());
    }
  } catch (err) {
    console.log(err);
    dispatch(authError());
  }
};
// ${process.env.REACT_APP_BASE_URL}

//login
export const loginSuccess = (payload) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log("called", payload);
    console.log("action",payload);
    // const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`, payload);
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`,payload);
    console.log("res action",res);
    const token = res.data.token
    if (res.data.success) {
      console.log("loginSuccess", res);
      localStorage.setItem("apnidukan",token);
      dispatch(authSuccess(res.data.token));
      alert("Login successful");
    } else {
      console.log(res.data.message);
      dispatch(authError());
      // alert("you got error");
    }
  } catch (err) {
    console.log("login error from action", err);
    dispatch(authError());
  }
};

