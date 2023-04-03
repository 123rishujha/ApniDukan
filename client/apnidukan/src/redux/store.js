import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
  
  //import reducers
  import { reducer as ProductReducer } from "./ProductReducer/reducer";
  import { authReducer } from "./auth/auth.reducer";
  import { cartReducer } from "./cart/cart.reducer";
  import { checkoutReducer } from './checkout/checkout.reducer';
  import { orderReducer } from './order/order.reducer';
  
  
  //add all the reducers here
  const rootReducer = combineReducers({
    ProductReducer,
    authReducer,
    cartReducer,
    checkoutReducer,
    orderReducer
  });
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = legacy_createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
  );
