import { useHistory } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { myOrderthunk } from "../reduxstore/thunk"
import Navbar from '../Component/Navbar';
import Loader from "react-loader-spinner"

 function Myorders(props) {
    const history = useHistory();

    useEffect(() => {
        props.dispatch(myOrderthunk())   
    }, [])
    function shopping() {
        history.push("/")
    }
    const cakeorderlist =  props.myordercakes.map((each, index) =>
    (
        <div key={index} className="d-flex rounded shadow py-3 bg-white mb-lg-3 mb-2">

            <div className="d-flex w-100 justify-content-between align-items-center flex-xl-row flex-column">
                <div className="d-flex flex-column mb-2 pl-5">
                    <div className="border-bottom py-3">
                <span className="d-inline-block px-2 border-0 font-weight-bolder" >Order No :</span><span className="font-weight-bolder">{each.orderid}</span>
                <span className="d-inline-block px-2 border-0 font-weight-bolder ml-4" >Order Qunatity :</span><span className="font-weight-bolder">{each.cakes.length}</span>
                </div>
                <div className=" d-flex mt-2">
                <span className="d-inline-block px-2 border-0 font-weight-bolder" >Order Date :</span><span className="font-weight-bolder">{each.orderdate.substring(0, 10)}</span>   
                </div>
                <div className=" d-flex ">
                <span className="d-inline-block px-2 border-0 font-weight-bolder" >For Amount Rupees :</span><span className="font-weight-bolder">{each.price}</span>   
                </div>
                </div>
                <div className="d-flex">
                   {each.pending===true&&<div className="item_text_holder status_div_pending  mx-lg-3 mx-2 ">
                        <span>Pending</span>
                    </div>}
                    {each.pending===false&&<div className="item_text_holder status_div_complete   mx-lg-3 mx-2 ">
                        <span>Complete</span>
                    </div>}
                    </div>
          
            </div>
         
        </div>)
        )

    return(
        <>
          <Navbar></Navbar>
            {props.loader && <div className="d-flex vh-100 ">
                <Loader className="w-100 mt-5  d-flex justify-content-center align-items-center"
                    type="ThreeDots" color="#00BFFF" height={80} width={80} /></div>}
                    {!props.loader &&
        <div className=" bg-light rounded px-4 py-4 mt-2 shadow" style={{ width: "50%", margin: "auto" }}>
            <div className="text-center">
            <h4>YOUR ORDERS</h4>
            </div>

            <div className=" py-lg-2 px-lg-1 p-2 rounded ">
                                <div className="d-flex border-bottom  mb-lg-4 mb-1 justify-content-between align-items-center  ">
                                    <div className="flex-grow-1">
                                        <h1 style={{ fontSize: "1.3rem" }}>Order Details</h1>

                                    </div>
                                    <div>
                                        <h6>{props.myordercakes.length} Orders</h6>
                                    </div>
                                </div>
                                {props.myordercakes.length === 0 &&
                                    <h4 style={{ color: "RED" }}>NO ORDER</h4>}
                                {cakeorderlist}

                            </div>
            <button onClick={shopping} type="submit" className="btn btn-primary mt-3">CONTINUE SHOPPING</button>
        </div>}
        </>
    )
    
}
export default connect(function (state, props) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>nayana",state)
    return {
        myordercakes: state["myOrderreducer"]["myordercakes"] || [],
        loader: state["myOrderreducer"]["isloading"],
    } 
})(Myorders)