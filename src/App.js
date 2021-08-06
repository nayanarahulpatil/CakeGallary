
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
import Orderplace from './Component/Orderplace';
import Orderdone from './Component/Orderdone';
import ErrorBoundary from './Component/Errorboundries'
import Myorders from './Component/My_order'
function App() {
 
  return (
    <>
  <ErrorBoundary>
      <Route exact path="/" render={() => (<Home />)} />
      <Route exact path="/Product" component={Cakelist} />
      <Route exact path="/Cakedetails" component={Cakedetails} />
      <Route exact path="/myorder" component={() => (<Myorders/>)} />
      <Route exact path="/Addcackedetails" component={Addcackedetails} />
      <Route exact path="/search" component ={Search} />
      <Route exact path="/cartitem" component ={CartItem} />
      <Route exact path="/Login" component={() => (<Login />)} />
      <Route exact path="/placeorder" component={() => (<Orderplace />)} />
      <Route exact path="/orderdone" component={() => (<Orderdone />)} />
      <Route exact path="/forgotpassword" component={Forgotpassword} />
      <Route exact path="/Signup" component={Signup} />
      </ErrorBoundary>

    </>
  );
}

export default App;
