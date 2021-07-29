import { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Component/Navbar';
import Loader from "react-loader-spinner"
 export default function CartItem(props) {

    var [itemcount , setitemcount]=useState(1)
    var [cakelist, setCakelist] =useState([])
    var[loader,setloader]=useState(true)
    const history = useHistory();

    const btn_additem = (id) => {
        setitemcount(itemcount+1)
        console.log(id)
    }
    const btn_removeitem = (id) => {
        var spanitemcount = document.getElementById("cartitemcount").innerText
        console.log(id)
    }
    useEffect(()=>{
        let apiurl = "https://apifromashu.herokuapp.com/api/cakecart"
    
        axios(
          {
            headers:{authtoken:localStorage.token},
            method:'post',
           url:apiurl    
         }
        ).then((response)=>{
      
          setCakelist(response.data.data)
           setloader(false)
          console.log(response.data.data)
   
        },(error)=>{
          console.log("error from all cakes api" , error)
        })
        
       }, [])
  
       const cakeitemlist = cakelist.map((each,index) =>
       (
           <div key={index} className="d-flex border-bottom py-3">
              
                                    <div className="d-flex w-100 justify-content-between align-items-center flex-xl-row flex-column">
                                        <div className="d-flex  align-items-center mb-2 ">
                                            <img src={each.image} alt="cartitemimage" style={{ maxWidth: "5rem" }}></img>
                                        
                                        <div className="item_text_holder mx-lg-3 mx-2">
                                            <h5>{each.name}</h5>
                                        </div>
                                        </div>
                                        <div className="d-flex ">
                                        <div className="item_count_holder d-flex">
                                            <div className="d-flex flex-row">
                                                <button onClick={() => btn_additem(index)} className="border-0">+</button>
                                                <span id="cartitemcount" className="border font-weight-bolder px-2" style={{ display: "block", margin: "0.2rem", }}>{itemcount}</span>
                                                <button onClick={() => btn_removeitem(index)}  className="border-0">-</button>
                                            </div>
                                        </div>
                                        <div className="mx-lg-3 mx-2 ">
                                            <span className="d-inline-block px-2 border-0 font-weight-bolder" >{each.price}</span><span className="font-weight-bold">Rupees</span>

                                        </div>
                                        <div>
                                            <button className="border-0 font-weight-bolder">&times; </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>)
     
     )
   
    return (
         <>
         <Navbar></Navbar>
         {loader && <div className="d-flex vh-100 "> 
             <Loader className="w-100 mt-5  d-flex justify-content-center align-items-center"
        type="ThreeDots" color="#00BFFF" height={80} width={80}/></div>}

        {!localStorage.token &&
            history.push("/Login")
        }

            {localStorage.token && !loader &&
           
                <div className="container mt-3">
                    <div className="d-flex vh-100 ">
                        <div className="d-flex flex-xl-row flex-column cart_container  justify-content-xl-between align-self-center rounded">
                            <div className="bg-white p-lg-5 p-2 rounded cart_itm_details_container">
                                <div className="d-flex border-bottom py-3 justify-content-between align-items-center  ">
                                    <div className="flex-grow-1">
                                        <h1 style={{ fontSize: "1.6rem" }}>Shopping Cart</h1>
                                        
                                    </div>
                                    <div>
                                        <h6>3 items</h6>
                                    </div>
                                </div>
                  
                             {cakeitemlist}

                            </div>
                            <div className="rounded py-5 px-4 cart_itm_summary_container ">
                                <div className="d-flex py-1 border_dark justify-content-between align-items-center  ">
                                    <div>
                                        <h5>Summary</h5>
                                    </div>
                                </div>
                                <div className="d-flex border_dark py-4">
                                    <div className="d-flex w-100 justify-content-between align-items-center ">
                                        <div>
                                            <h6>Item<span id="totalitemcount">3</span></h6>
                                        </div>
                                        <div className="item_text_holder">
                                            <span className="d-inline-block px-1 border-0 font-weight-bolder" >315</span><span className="font-weight-bold">Rupees</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex  py-4">
                                    <div className="d-flex w-100 justify-content-between ">
                                        <div>
                                            <h6>TOTAL PRICE</h6>
                                        </div>
                                        <div className="item_text_holder">
                                            <span className="px-1 border-0 font-weight-bolder" >315</span><span className="font-weight-bold">Rupees</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-dark btn-block"> CHECKOUT</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
           
           </>
    );
  }
  
    