import * as types from "./auth.types";

const initialState = {
  isError: false,
  isLoading: false,
  token: localStorage.getItem("token") || null,
  isLoggedIn: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.REGISTRATION_SUCCESS: {
      return { ...state, isLoading: false, isError: false, };
    }

    case types.AUTH_SUCCESS: {
      return { ...state, isLoading: false, isError: false, token: payload, isLoggedIn:true };
    }

    default: {
      return state;
    }
  }
};
