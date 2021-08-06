import { Component } from "react"
import axios from "axios"
import { Link, withRouter } from "react-router-dom"
import  Navbar  from '../Component/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";

class Login extends Component {
    constructor() {
        super()
        // initialising the state
        this.state = {
            name: "nayana"

        }
    }
  
    user = {}

    handleEmail = (event) => {
        this.user.email = event.target.value
    }
    handlePassword = (event) => {
        this.user.password = event.target.value
    }
   
    
    login = (event) => {
        // updating the state
        event.preventDefault()
        console.log(this.user.email)
        if(this.user.email==" " || this.user.email==undefined )
        {
            alert("Enter Your Email Id")
        }
       else if(this.user.password==" " || this.user.password==undefined ){
            alert("Enter Your password")
        }

       else if(!this.user.password==" " || this.user.password==undefined  && !this.user.email==" " || this.user.email==undefined )
        {
        let urldata = "https://apifromashu.herokuapp.com/api/login";
        axios({
            method: "post",
            url: urldata,
            data: this.user
        }).then((responce) => {
            console.log(responce);

            if (responce.data.token) {
                this.props.dispatch(
                    {
                        type:"LOGIN",
                        payload:responce.data
                    }
                )
               
                this.props.history.push("/");
                localStorage.token = responce.data.token
                toast.success('Hi welcome to our CakeGallary', {
                    position: "top-left",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

            }
            else {
                alert("invalid creadential")
            }
        }, (error) => {

        })}
        
    }


    render() {
        return (
            <>
                <Navbar />
                <div className="mt-5 bg-light rounded p-5 shadow" style={{ width: "50%", margin: "auto" }}>
                    <form>
                        <h1>Login Here</h1>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onChange={this.handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input onChange={this.handlePassword} type="password" className="form-control" placeholder="Password" />
                        </div>

                        <div className="mt-4">
                            <label className="errormessage">{this.state.errorMessage}</label>
                            <button onClick={this.login} type="submit" className="btn btn-primary">Submit</button>

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
                        
                        <div className="mt-5">
                            <Link to="/signup">New User? Signup Here</Link>
                        </div>
                        <div className="mt-2">
                            <Link to="/forgotpassword">Forgor Password</Link>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
Login= withRouter(Login)
export default connect()(Login)

// withRouter is adding props to Login Component 