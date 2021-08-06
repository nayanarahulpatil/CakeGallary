import { createStore, combineReducers, applyMiddleware } from "redux";
import createSaga from "redux-saga"
import RootSaga from './saga'
import { Addcakedetail } from './reducers'
import { Showlogin } from './reducers'
import { cartitemslist } from './reducers'
import { addcartitemsquntity } from './reducers'
import { removecartitemsquntity } from './reducers'
import { deletecartitemsquntity } from './reducers'
import { Orderplacereducer } from './reducers'
import { myOrderreducer } from './reducers'
import thunk from "redux-thunk"

var sagaMiddleware = createSaga()
var reducers = combineReducers({ Addcakedetail, Showlogin, cartitemslist, addcartitemsquntity, removecartitemsquntity, deletecartitemsquntity, Orderplacereducer, myOrderreducer })
var store = createStore(reducers, applyMiddleware(sagaMiddleware, thunk))

sagaMiddleware.run(RootSaga)
export default store
