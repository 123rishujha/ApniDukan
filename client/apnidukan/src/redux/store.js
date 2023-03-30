import {legacy_createStore,combineReducers,applyMiddleware,compose} from 'redux'; 
import thunk from "redux-thunk";


//import reducers
import { dummyReducer } from './dummy/dummy.reducer';
import { reducer as ProductReducer } from './ProductReducer/reducer';



//add all the reducers here
const rootReducer = combineReducers({
    dummyReducer,
    ProductReducer
});


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));

