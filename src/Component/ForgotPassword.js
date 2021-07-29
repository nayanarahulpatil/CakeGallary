import axios from "axios"
import { PureComponent } from "react"
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Component/Navbar';

class Forgotpassword extends PureComponent {
    constructor() {
        super()
        // initialising the state


    }

    user = {}

    handleEmail = (event) => {
        this.user.email = event.target.value
    }

    recover = (event) => {
        // updating the state
        event.preventDefault();
console.log(this.user.email)
        if (this.user.email == " " || this.user.email == undefined) {
            alert("Enter Your Email Id")
        }


        else if (!this.user.email == " " || this.user.email == undefined) {
            let urldata = "https://apifromashu.herokuapp.com/api/recoverpassword";
            axios({
                method: "post",
                url: urldata,
                data: this.user // we requrie structure like {email}
            }).then((responce) => {
                if (responce.data.message) {
                    alert("Your password is send on your emailid please check")
                    this.props.history.push("/Login")
                }
                else if (responce.data.message=="responce.data.message"){
                    alert("No Such Email exists")
                }
                else {
                   alert("Getting error while recovering password")

                }
            }, (error) => {
                alert("invalid credential")
            })




        }
    }

    render() {

        return (
            <>
                <Navbar></Navbar>
                <div  className="bg-light rounded p-5 mt-5 shadow" style={{ width: "50%", margin: "auto" }}>

                    <form className="mt-2">
                        <h1>Recover Password</h1>

                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onChange={this.handleEmail} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div>

                            <button onClick={this.recover} type="submit" className="btn btn-primary mt-3">Recover Password</button>

                        </div>

                    </form>

                </div>
            </>
        )
    }
}

export default Forgotpassword

