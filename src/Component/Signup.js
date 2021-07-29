import axios from "axios"
import {PureComponent} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  Navbar  from '../Component/Navbar';

class Signup extends PureComponent{
    constructor(){
        super()
        // initialising the state
      
       
    }
 
    user = {}

     handleEmail = (event)=>{
        this.user.email = event.target.value
      }
    handlePassword = (event)=>{
         this.user.password = event.target.value
       }
       handleName = (event)=>{
        this.user.name= event.target.value
      }
    signup = (event)=>{
       // updating the state
       event.preventDefault();
        if(this.user.name==" " || this.user.name==undefined ){
        alert("Enter Your name")
    }

     else if(this.user.email==" " || this.user.email==undefined )
       {
           alert("Enter Your Email Id")
       }
      else if(this.user.password==" " || this.user.password==undefined ){
           alert("Enter Your password")
       }
      

      else if(!this.user.password==" " || this.user.password==undefined  && !this.user.email==" " || this.user.email==undefined )
       {
      let urldata= "https://apifromashu.herokuapp.com/api/register";
      axios({
          method:"post",
          url:urldata,
          data:this.user  // we requrie structure like {email,name,password}
      }).then((responce)=>{
          if(responce.data.message =="Please Provide Details")
{
    alert("Please Provide correct Details")
}
  else{
    console.log(responce.data.message)
    toast.success('Login Succsefully Done', {
        position: "top-left",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        this.props.history.push("/")
  }        
      },(error)=>{
        alert("invalid credential")
      })
    
    

 
    }}

    render(){
       
        return (
            <>
            <Navbar></Navbar>
            <div className=" bg-light rounded p-5 mt-5 shadow" style={{width:"50%" , margin:"auto"}}>
               
                <form className="mt-1">
                <h1>Signup Here</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input onChange={this.handleName} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={this.handleEmail} type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={this.handlePassword} type="password" className="form-control"  placeholder="Password" />
                </div>
                <div>
                
                <button onClick={this.signup} type="submit" className="btn btn-primary mt-3">Signup</button>
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
            </>
        )
    }
}

export default Signup

 