import * as types from "./cart.types";

const initialState = {
  isLoading: false,
  isError: false,
  cart: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.CART_GET_SUCCESS: {
      return { ...state, isLoading: false, isError: false, cart: payload };
    }

    default: {
      return state;
    }
  }
};
