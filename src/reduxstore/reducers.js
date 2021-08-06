//reducer is a pure function whichhelp toupdate state there is method1.state 2. action

export var Addcakedetail = function (state = {}, action) {

    switch (action.type) {
        case "GET_ALL_CAKE":
            {
                state = { ...state }
                state["cakelist"] = action.payload
                return state
            }

            case "ADD_TO_CART":
                {
                    state = { ...state }
                    state["cartitemlist"] = action.payload
                    return state
                }
        default: return state
    }
}
export var Showlogin = function (state = {
    loginflag: localStorage.token ? true : false
}, action) {
    switch (action.type) {

        case "LOGIN":
            {
                state = { ...state }
                state["loginflag"] = true
                state["user"] = action.payload
                return state
            }
        default: return state
    }
}
export var cartitemslist = function(state ={
   
},action){

   switch(action.type){
       case "CART_FETCHING" :{
           state = {...state}
           state["isloading"] = true
           return state
       }
       case "CART_FTECHED" :{
        state = {...state}
        state["isloading"] = false
        state["cartitems"] = action.payload
        state["cartprice"] = action.price
        return state
    }
    case "CART_FAILURE" :{
        state = {...state}
        state["isloading"] = false
        state["carterror"] = "Some Error Occurred"
        return state
    }

       default : return state
   }
}
export var addcartitemsquntity = function(state ={
   
},action){

   switch(action.type){
    case "CARTQUT_FETCHING" :{
        state = {...state}
        state["isloading"] = true
        return state
    }
       case "CARTQUT_ADD" :{
           state = {...state}
           state["isloading"] = false
           state["cartitemquantity"] =action.payload+1
           console.log("<><<><><><><><>",state)
           return state
       }
       case "CARTQUT_FAILURE" :{
        state = {...state}
        state["isloading"] = false
        state["cartitemquantity"] = "Some Error Occurred"
        return state
    }

       default : return state
   }
}
export var removecartitemsquntity = function(state ={
   
},action){

   switch(action.type){
 
       case "CARTQUT_REMOVE" :{
           state = {...state}
           state["isloading"] = false
           state["cartitemquantity"] = action.payload
           return state
       }
       case "CARTQUT_FAILURE" :{
        state = {...state}
        state["isloading"] = false
        state["cartitemquantity"] = "Some Error Occurred"
        return state
    }

       default : return state
   }
}
export var deletecartitemsquntity = function(state ={
   
},action){

   switch(action.type){
 
       case "CARTITEM_REMOVE" :{
           state = {...state}
           state["isloading"] = false
           state["cartitemquantity"] = action.payload
           return state
       }
    

       default : return state
   }
}
export var Orderplacereducer = function(state ={},action){

   console.log("ooooooooooooooooo" , action)
   switch(action.type){
       case "ORDERPALCE_FETCH":{
           state= {...state}
           state["isloading"] = true
           return state
       }
       case "ORDERPALCE_SUCESS" :{
           state = {...state}
           state["ordercakedata"] = action.payload
           state["isloading"] = false
           console.log(">>>>>>>>>>>>>>>>>>>>" , state)
           return state
       }
       case "ORDERPALCE_FAILURE":{
        state= {...state}
        state["isloading"] = false
        state["error"]="INVALID LOGIN"
        return state
    }
       default : return state
   }
}
export var myOrderreducer = function (state ={},action){

    console.log("ooooooooooooooooo" , action)
    switch(action.type){
        case "MYORDER_FETCH":{
            state= {...state}
            state["isloading"] = true
            return state
        }
        case "MYORDER_SUCESS" :{
            state = {...state}
            state["myordercakes"] = action.payload
            state["isloading"] = false
            console.log(">>>>>>>>>>>>>>>>>>>>" , state)
            return state
        }
        case "MYORDER_FAILURE":{
         state= {...state}
         state["isloading"] = false
         state["error"]="INVALID LOGIN"
         return state
     }
        default : return state
    }
    
}