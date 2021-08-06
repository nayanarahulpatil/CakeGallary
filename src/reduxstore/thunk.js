import {cart_axios} from "../index"

import { ToastContainer, toast } from 'react-toastify';

 export  function Orderplacethunk(data){
     console.log("thunk data from order",data)
   
    return async (dispatch)=>{
        dispatch({
            type:"ORDERPALCE_FETCH"
        })
        var result  = await cart_axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/addcakeorder",
            data:data
        })
        console.log("resulllllllllllllll",result.data.messageg)
        if(result.data){
            dispatch({
                type:"ORDERPALCE_SUCESS",
                payload:result.data
            })
          
        }
        else{
            dispatch({
                type:"ORDERPALCE_FAILURE"
            })
            
              
            
        }
       
    }
}
export  function myOrderthunk(){
    
  
   return async (dispatch)=>{
       dispatch({
           type:"MYORDER_FETCH"
       })
       var result  = await cart_axios({
           method:"post",
           url:"https://apifromashu.herokuapp.com/api/cakeorders",
           data:{}
       })
       console.log("resulllllllllllllll",result.data)
       if(result.data.cakeorders){
           dispatch({
               type:"MYORDER_SUCESS",
               payload:result.data.cakeorders
           })
         
       }
       else{
           dispatch({
               type:"MYORDER_FAILURE"
           })
           
             
           
       }
      
   }
}