
import './App.css';
import { Home } from './Component/Home';
import { Addcackedetails } from './Component/Add_cake_details'
import Signup from './Component/Signup';
import Forgotpassword from './Component/ForgotPassword';
import { Route } from "react-router-dom";
import  Cakedetails  from './Component/CakeDetails';
import Login from './Component/Login';
import  Cakelist from './Component/Cakelist';
import {Search} from './Component/Search';
import CartItem from './Component/CartIteam';


function App() {
  


  return (
    <>

      <Route exact path="/" render={() => (<Home />)} />
      <Route exact path="/Product" component={Cakelist} />
      <Route exact path="/Cakedetails" component={Cakedetails} />
      <Route exact path="/Addcackedetails" component={Addcackedetails} />
      <Route exact path="/search" component ={Search} />
      <Route exact path="/cartitem" component ={CartItem} />
      <Route exact path="/Login" component={() => (<Login />)} />
      <Route exact path="/forgotpassword" component={Forgotpassword} />
      <Route exact path="/Signup" component={Signup} />
  

    </>
  );
}

export default App;
