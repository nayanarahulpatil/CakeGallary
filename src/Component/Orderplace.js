import axios from "axios"
import { PureComponent } from "react"
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Component/Navbar';
import { Orderplacethunk } from "../reduxstore/thunk"
import {withRouter} from 'react-router-dom'


class Orderplace extends PureComponent {
    
    constructor(props) {
        super()
        // initialising the state
        this.state = {
            
        }
          
    }
    componentDidUpdate() {
      
        
      }
   
    user = {}
    handleName = (event) => {
        this.state.name = event.target.value
    }
    handleAddress = (event) => {
        this.state.address = event.target.value
    }
    handleArea = (event) => {
        this.state.area = event.target.value
    }
    handleCity = (event) => {
        this.state.city = event.target.value
    }
    handlePincode = (event) => {
        this.state.pincode = event.target.value
    }
    handleMobileno = (event) => {
        this.state.phone = event.target.value
    }
  

    Orderplace = (event) => {
      
        console.log("orderuser user",this.props.cartcakeslist)
    
        this.state.cakes=this.props.cartcakeslist
        this.state.price=this.props.cartprice
        // updating the state
        event.preventDefault();
        if (this.state.name == " " || this.state.name == undefined) {
            alert("Enter Your name")
        }

        else if ( this.state.address == " " ||  this.state.address == undefined) {
            alert("Enter Your Address")
        }
        else if (this.state.area  == " " || this.state.area  == undefined) {
            alert("Enter Your Area")
        }
        else if (this.state.city  == " " || this.state.city  == undefined) {
            alert("Enter Your city")
        }
        else if (this.state.pincode  == " " || this.state.pincode  == undefined) {
            alert("Enter Your pincode")
        }
        else if (this.state.phone  == " " || this.state.phone  == undefined) {
            alert("Enter Your phone")
        }


        else if (!this.state.name == " " || this.state.name == undefined && !this.state.address == " " || this.state.address == undefined) {
            
            this.props.dispatch(Orderplacethunk(this.state))
            
            console.log("component did mount",this.props.ordercakedata)
       
            if(this.props.ordercakedata){
                toast.success('Login Succsefully Done', {
                    position: "top-left",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                this.props.history.push('/orderdone')
            }
            else{
                alert("Insufficient infomation Please check details")
            }
        }
     
     
    }

    render() {
        
      
        
        return (
            <>
           
                <Navbar></Navbar>
              
                <div className=" bg-light rounded px-5 py-4 mt-5 shadow" style={{ width: "50%", margin: "auto" }}>
                    <div className="float-right">
                {this.props.cartcakeslist.length>1 &&  <h6 className="text-center font-weight-normal">{this.props.cartcakeslist.length} cakes in your cart</h6>}
                        {this.props.cartcakeslist.length==1 &&  <h6 className="text-center font-weight-normal">{this.props.cartcakeslist.length} cake in your cart</h6>}
                        </div>
                        <div >
                    <form className="mt-1">
                        <h2 className="text-center">Place Your Order</h2>
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input onChange={this.handleName} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Address</label>
                            <input onChange={this.handleAddress} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter address" />

                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Area</label>
                            <input onChange={this.handleArea} type="text" className="form-control" placeholder="Enter area" />
                        </div>
                        <div className="form-group  mt-5">
                            <div className="input-group">
                                <label for="exampleInputEmail1" >City Name</label>
                                <input onChange={this.handleCity} type="text" className="form-control ml-1" aria-describedby="emailHelp" placeholder="Enter City" />

                                <div className="form-check form-check-inline ml-5">
                                    <label for="exampleInputEmail1">Pincode</label>
                                    <input onChange={this.handlePincode} type="text" className="form-control ml-1" aria-describedby="emailHelp" placeholder="Enter Pincode" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group  mt-5">
                            <div className="input-group">
                                <label for="exampleInputEmail1">Mobile Number</label>
                                <input onChange={this.handleMobileno} type="text" className="form-control ml-1" aria-describedby="emailHelp"  placeholder="Enter Mobile No" />

                                <div className="form-check form-check-inline ml-5">
                                    <label for="exampleInputEmail1">Amount</label>
                                    <input type="text" className="form-control ml-1" aria-describedby="emailHelp" disabled="true" value={this.props.cartprice} />
                                </div>
                            </div>
                        </div>
                       
                        <div className="text-center">

                            <button onClick={this.Orderplace} type="submit" className="btn btn-primary mt-3">Place Order</button>
                            <ToastContainer
                                position="top-left"
                                autoClose={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                            />
                        </div>

                    </form>
                    </div>
                </div>
            </>
        )
    }
}
Orderplace = withRouter(Orderplace)

export default connect(function (state, props) {
    console.log("oderplace>>>",state)
    return {
        cartcakeslist: state["cartitemslist"]["cartitems"] || [],
        cartprice:state["cartitemslist"]["cartprice"]||[],
        ordercakedata:state["Orderplacereducer"]["ordercakedata"]||[]


    }
})(Orderplace)

