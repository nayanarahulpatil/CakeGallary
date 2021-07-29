import axios from 'axios';
import { useEffect, useState } from 'react';
import {CakeCard} from './Cake_card'
import Loader from "react-loader-spinner"
import { connect } from 'react-redux';

 function Cakelist(props){
    var [cakes ,setcakes]=useState([])
    var[loader,setloader]=useState(true)
  
    useEffect(()=>{
      if (!props.allcakeslist){
        let apiurl = "https://apifromashu.herokuapp.com/api/allcakes"

        axios(
          {
            method:'get',
           url:apiurl     }
        ).then((response)=>{
         
          setcakes(response.data.data)
          setloader(false)
          props.dispatch(
            {
                type:"GET_ALL_CAKE",
                payload:response.data.data
            }
        )
        },(error)=>{
          console.log(error)
        })
      }
      else{
        setcakes(props.allcakeslist)
        setloader(false)
      }
      
    },[])
   
  
    return(
        <>
       

<div className="container-fluid  p-5 ">
{loader &&  <Loader className="w-100  d-flex justify-content-center align-items-center"
type="ThreeDots" color="#00BFFF" height={80} width={80}/>}

<div class="d-flex justify-content-around flex-wrap flex-row w-100">
{cakes.map((each,index)=>{
       
         return <CakeCard key={index} data={each} />
       })}

 </div>
 </div>
        </>
    );
}

export default connect(function(state,props){
    return{
      allcakeslist:state["Addcakedetail"]["cakelist"]
    }
  })(Cakelist)