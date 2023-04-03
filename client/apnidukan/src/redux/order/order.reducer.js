import * as types from "./order.types";

const initialState = {
  isLoading: false,
  isError: false,
  order: [],
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.ORDER_GET_SUCCESS: {
      return { ...state, isLoading: false, isError: false, order: payload };
    }

    default: {
      return state;
    }
  }
};
