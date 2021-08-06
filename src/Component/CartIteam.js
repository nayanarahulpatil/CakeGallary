import { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Loader from "react-loader-spinner"
import { Link } from "react-router-dom";
import React from 'react';


function CartItem(props) {

    
    var [cakelist, setCakelist] = useState([])

    
    const history = useHistory();

    const btn_additem = (id, cakeid) => {
        setCakelist(props.cartcakeslist);
       const quntity = document.getElementById("cartitemcount").innerHTML

        const newitmlist = props.cartcakeslist.filter((cake) => {
            return Object.values(cake).join(" ").includes(cakeid)
        })

        var datacake = {
            name: newitmlist[0].name,
            cakeid: newitmlist[0].cakeid,
            price: newitmlist[0].price,
            weight: newitmlist[0].weight,
            image: newitmlist[0].image
        }

        props.dispatch({
            type: "Add_Cart_Item_Quantity",
            payload: datacake
        })
       
         //var newquntity= quntity+1
         //addquntity(newquntity,cakeid)

        //setCakelist([...cakelist,props.cartcakesquantity])
        //setCakelist(cakelist =>cakelist.map(user => (user.cakeid === cakeid ? [...cakelist,{quantity:props.cartcakesquantity,...cakelist} ]:cakelist )))
       
    }
    const btn_removeitem = (id, cakeid) => {
       
        props.dispatch({
            type: "REMOVE_Cart_Item_Quantity",
            payload: cakeid
        })


        
    }

    const btn_deleteitem = (id, cakeid) => {
       
        props.dispatch({
            type: "DELETE_Cart_Item_Quantity",
            payload: cakeid
        })

    }
    const btnchekout = () => {
        history.push("/placeorder")
    }
    var totalamount = props.cartcakeslist.reduce(function (tot, arr) {
        // return the sum with previous value
        return tot + arr.price * arr.quantity;

        // set initial value as 0
    }, 0);
    useEffect(() => {
        
        props.dispatch({

            type: "Cart_Items",
            payload:totalamount
        })
     
        setCakelist(props.cartcakeslist);
    }, [totalamount])



    const cakeitemlist = props.cartcakeslist.map((each, index) =>
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
                    <div className="mx-lg-3 mx-2 ">
                        <span className="d-inline-block px-2 border-0 font-weight-bolder" >{each.price}</span><span className="font-weight-bolder">Rs</span>

                    </div>
                    <div className="item_count_holder d-flex">
                        <div className="d-flex flex-row">
                            <button onClick={() => btn_additem(index, each.cakeid)} className="border-0">+</button>
                            <span id="cartitemcount" className="border font-weight-bolder px-2" style={{ display: "block", margin: "0.2rem", }}>{each.quantity}</span>
                            <button onClick={() => btn_removeitem(index, each.cakeid)} className="border-0">-</button>
                        </div>
                    </div>
                    <div className="mx-lg-3 mx-2 ">
                        <span className="d-inline-block px-2 border-0 font-weight-bolder" >{each.quantity * each.price}</span><span className="font-weight-bolder">Rs</span>

                    </div>
                    <div>
                        <button className="border-0 font-weight-bolder" onClick={() => btn_deleteitem(index, each.cakeid)} >&times; </button>
                    </div>
                </div>
            </div>
         
        </div>)
        )

    

    return (
        <>
{console.log("hiiiiiiiiiiiiiiiiiii",cakelist)}
            <Navbar></Navbar>
            {props.loader && <div className="d-flex vh-100 ">
                <Loader className="w-100 mt-5  d-flex justify-content-center align-items-center"
                    type="ThreeDots" color="#00BFFF" height={80} width={80} /></div>}

            {!localStorage.token &&
                history.push("/Login")
            }

            {localStorage.token && !props.loader &&

                <div className="container  mt-lg-1">
                    <div className="d-flex vh-100 ">
                        <div className="d-flex flex-xl-row flex-column cart_container  justify-content-xl-between align-self-center rounded">
                            <div className="bg-white p-lg-5 p-2 rounded cart_itm_details_container">
                                <div className="d-flex border-bottom py-3 justify-content-between align-items-center  ">
                                    <div className="flex-grow-1">
                                        <h1 style={{ fontSize: "1.6rem" }}>Shopping Cart</h1>

                                    </div>
                                    <div>
                                        <h6>{props.cartcakeslist.length} items</h6>
                                    </div>
                                </div>
                                {cakeitemlist.length === 0 &&
                                    <h4 style={{ color: "RED" }}>Your cart is empty</h4>}
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
                                            <h6>Cart Items <span id="totalitemcount">{props.cartcakeslist.length}</span></h6>
                                        </div>
                                        <div className="item_text_holder">
                                            <span className="d-inline-block px-1 border-0 font-weight-bolder" >{totalamount}</span><span className="font-weight-bold">Rupees</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex  py-4">
                                    <div className="d-flex w-100 justify-content-between ">
                                        <div>
                                            <h6>TOTAL PRICE</h6>
                                        </div>
                                        <div className="item_text_holder">
                                            <span className="px-1 border-0 font-weight-bolder" >{totalamount}</span><span className="font-weight-bold">Rupees</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-dark btn-block" onClick={() => btnchekout()}> CHECKOUT</button>
                                </div>
                                <div>
                                <Link to="/" className="btn btn-primary btn-block mt-3" style={{color:"white",textDecoration:"none"}}>CONTINUE SHOPPING</Link>
              
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    );
}
export default connect(function (state, props) {
    console.log("nayanahere....",state)
    return {
        cartcakeslist: state["cartitemslist"]["cartitems"] || [],
        cartcakesquantity: state["addcartitemsquntity"]["cartitemquantity"] || [],
        loader: state["cartitemslist"]["isloading"],
        quantityadd: state["addcartitemsquntity"]["cartitemquantity"]

    }
})(CartItem)

