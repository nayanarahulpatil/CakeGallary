import { useState } from "react"
import { Link } from "react-router-dom";
export function Signup(){
var user ={};
    var [state ,setstate]=useState(user)
   var handleEmail = (event)=>{
        setstate(user.email = event.target.value)
        console.log(state)
      }
   var handlePassword = (event)=>{
         setstate(user.password = event.target.value)
       }
     var  handleName = (event)=>{
        setstate(user.name= event.target.value)
      }
  function signup(e){
      e.preventDefault();
  }
    return(
        <>
        <div className="container bg-dark my-1 p-5">
                <div className="d-flex text-light">
                    <div className="w-75 mx-auto ">
         <form>
                <h1 className="text-center">Signup Here</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input onChange={handleName} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={handleEmail} type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={handlePassword} type="password" className="form-control"  placeholder="Password" />
                </div>
                <div>
                
                <button type="submit" className="btn btn-primary" onClick ={signup}><Link to="/" style={{color:"white",textDecoration:"none"}}>Sign up</Link></button>
                </div>
                </form>
                </div>
                </div>
                </div>
        </>
    );
}