import logo from './logo.svg';
import './App.css';
import { Home } from './Component/Home';
import { Addcackedetails } from './Component/Add_cake_details'
import  Signup  from './Component/Signup';
import { Route } from "react-router-dom";
import {Cakedetails} from './Component/CakeDetails';
import Login from './Component/Login';
import { Cakelist } from './Component/Cakelist';

function App() {

  return (
    <>
    
      <Route exact path="/" component={Home} />
      <Route exact path="/Product" component={Cakelist} />
      <Route exact path="/Cakedetails" component={Cakedetails} />
      <Route exact path="/Addcackedetails" component={Addcackedetails} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} />

    </>
  );
}

export default App;
