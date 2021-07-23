import logo from './logo.svg';
import './App.css';
import { Home } from './Component/Home';
import { Addcackedetails } from './Component/Add_cake_details'
import Signup from './Component/Signup';
import { Route } from "react-router-dom";
import { Cakedetails } from './Component/CakeDetails';
import Login from './Component/Login';
import { Cakelist } from './Component/Cakelist';
import { useState } from 'react';
function App() {
  const [checklogindone, setchecklogindone] = useState(localStorage.token ? true : false);

  const userlogindone = () => {

    setchecklogindone(true);

  }


  return (
    <>

      <Route exact path="/" component={() => (<Home checklogindone={checklogindone} />)} />
      <Route exact path="/Product" component={Cakelist} />
      <Route exact path="/Cakedetails" component={Cakedetails} />
      <Route exact path="/Addcackedetails" component={Addcackedetails} />
      <Route exact path="/Login" component={() => (<Login userlogindone={userlogindone} />)} />
      <Route exact path="/Signup" component={Signup} />

    </>
  );
}

export default App;
