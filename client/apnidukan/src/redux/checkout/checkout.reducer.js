import * as types from "./checkout.types";

const initialState = {
  isLoading: false,
  isError: false,
  checkout: [],
};

export const checkoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.CHECKOUT_GET_SUCCESS: {
      return { ...state, isLoading: false, isError: false, checkout: payload };
    }

    default: {
      return state;
    }
  }
};
