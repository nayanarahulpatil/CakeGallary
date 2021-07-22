import {Component} from "react"
import { Link  , withRouter} from "react-router-dom"
import { Navbar } from '../Component/Navbar';
class Login extends Component{
    constructor(){
        super()
        // initialising the state
        this.state = {
            name:"Ashu"
        }
    }
    user = {}

    handleEmail = (event)=>{
        this.user.email = event.target.value
      }
    handlePassword = (event)=>{
         this.user.password = event.target.value
       }
    login = (event)=>{
        // updating the state
        event.preventDefault()

        console.log(">>>>>>>>>>>>>>>" , this.props)
        this.setState({
            name:"Nayana",
            errorMessage:"Invalid Credentials"
        })
        if(this.user.email=="nayana.sh@gmail.com" && this.user.password=="test123"){
            this.props.history.push("/")
        }
       console.log("......................" , this.user) 
    }

    render(){
        return (
            <>
            <Navbar/>
            <div class="mt-5" style={{width:"50%" , margin:"auto"}}>
                <form>
                <h1>Login Here</h1>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={this.handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={this.handlePassword} type="password" class="form-control"  placeholder="Password" />
                </div>
               
                <div class="mt-4">
                <label className="errormessage">{this.state.errorMessage}</label>
                <button  onClick={this.login} type="submit" class="btn btn-primary">Submit</button>
                </div>
                <div class="mt-5">
                    <Link to="/signup">New User? Signup Here</Link>
                </div>
                </form>
            </div>
            </>
        )
    }
}

export default withRouter(Login)

// withRouter is adding props to Login Component 