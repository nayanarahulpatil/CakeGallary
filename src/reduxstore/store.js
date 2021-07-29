import { createStore ,combineReducers } from "redux";
import {Addcakedetail} from './reducers'
import {Showlogin} from './reducers'


var reducers = combineReducers({Addcakedetail,Showlogin})
var store = createStore(reducers)

 export default store

 console.log("store " , store.getState())
 store.dispatch({type:"logout"})
 store.dispatch({type:"Add_Cart"})
 console.log("store " , store.getState())