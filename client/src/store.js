import { combineReducers } from "redux";

import {createStore, applyMiddleware} from 'redux'


import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllproductsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer } from "./reducers/userReducer";
import { loginUserReducer } from "./reducers/userReducer";
import AddproductReducer from "./reducers/adminAddproReducer";
// import adminReducer from "./reducers/adminreducer";
const finalReducer = combineReducers({
    getAllproductsReducer : getAllproductsReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer:loginUserReducer,
    AddproductReducer:AddproductReducer,
    // adminReducer:adminReducer,
  
})

const cartItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]
const currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')):null


const initialState ={
    cartReducer :
   { 
    cartItems:cartItems
},
loginUserReducer:{
    currentUser:currentUser
}
}
const composeEnhancers = composeWithDevTools({})
const store =createStore(finalReducer,initialState , composeEnhancers(applyMiddleware(thunk)))


export default store