import {all , takeEvery , put} from "redux-saga/effects"
import axios from "axios"
import {cart_axios} from "../index"

function *CartGenerator(action){
  // first make and async task  and based on result dispatch necessary action

  yield put({
      type:"CART_FETCHING"
  })

  var response  = yield cart_axios({method:"post",
   url:"https://apifromashu.herokuapp.com/api/cakecart",
   data:{}
  }
  )

  if(response.data.data){
      yield put({
          type:"CART_FTECHED",
          payload:response.data.data,
          price:action.payload
      })
      console.log("data  from cart items " , response)
  }else{
    yield put({
        type:"CART_FAILURE"
    })
  }
}

function *Additemquntity(action){
 
 console.log("Itemadded in to the cart,,,,",action.payload)

  yield put({
    type:"CARTQUT_FETCHING"
})
   
  var addcaketocart  = yield cart_axios(
        {method:"post",
     url:"https://apifromashu.herokuapp.com/api/addcaketocart",
     data:action.payload})
    
     if(addcaketocart.data.data){
      console.log("datafromcart quantity added succefully....",addcaketocart.data.data.quantity)
    yield put({
        type:"CARTQUT_ADD",
        payload:addcaketocart.data.data.quantity
    })
    window. location. reload();

}else{
  yield put({
      type:"CARTQUT_FAILURE"
  })
}}

function *Removeitemquntity(action) {

  var usercakeid={cakeid:action.payload}
  var removecartresponce = yield cart_axios(
    {
      method:"post",
      url:"https://apifromashu.herokuapp.com/api/removeonecakefromcart",
      data:usercakeid 
    })
    console.log("datafromcart quantity",removecartresponce.data.message)
    if(removecartresponce.data)
    {
      yield put({
        type:"CARTQUT_REMOVE",
        payload:removecartresponce.data.message
      })
      window. location. reload();
    }
    else{
      yield put({
          type:"CARTQUT_FAILURE"
      })
}}
function *Deleteitemquntity(action) {

  var usercakeiddele={cakeid:action.payload}
  var removecartresponce = yield cart_axios(
    {
      method:"post",
      url:"https://apifromashu.herokuapp.com/api/removecakefromcart",
      data:usercakeiddele 
    })
    console.log("datafromcart quantity",removecartresponce.data.message)
    if(removecartresponce.data)
    {
      yield put({
        type:"CARTITEM_REMOVE",
        payload:removecartresponce.data.message
      })
      window. location. reload();
    }
    else{
      yield put({
          type:"CARTQUT_FAILURE"
      })
}}

function *CartSaga(){
  yield takeEvery('Cart_Items' , CartGenerator)
}
function *additemquntitySaga(){
    yield takeEvery('Add_Cart_Item_Quantity' , Additemquntity)
  }
  function *removeitemquntitySaga(){
    yield takeEvery('REMOVE_Cart_Item_Quantity' , Removeitemquntity)
  }
  function *deleteitemquntitySaga(){
    yield takeEvery('DELETE_Cart_Item_Quantity' , Deleteitemquntity)
  }

export default function *RootSaga(){

 yield all([CartSaga(),additemquntitySaga(),removeitemquntitySaga(),deleteitemquntitySaga()])
}