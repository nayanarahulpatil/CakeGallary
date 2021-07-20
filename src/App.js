import logo from './logo.svg';
import './App.css';
import { Navbar  } from './Component/Navbar';
import { Carousel  } from './Component/Carousel';
import {Addcackedetails} from './Component/Add_cake_details'
import {Signup} from './Component/Signup';
import { Route} from "react-router-dom";
import {Card} from './Component/Cake_card';
function App() {
  var cake1={
    name:"Pound Cake",
    description:"	Sponge cake, cream, food colouring",
    image:"cake3.jpg"
  }
  var cake2={
    name:"Baked Flourless Cake",
    description:"Egg whites, vanilla, and cream of tartar",
    image:"cake1.jpg"
  }
  var cake3={
    name:"Chiffon Cake",
    description:"Apple, caramel icing",
    image:"cake3.jpg"
  }
  return (
    <>

<Route exact path="/" component={Navbar}/>
<Route exact path="/" component={Carousel}/>
<div className="container">
<div className="d-flex">
<Route exact path="/"  component={() => <Card data={cake1} />} />
<Route exact path="/" component={() => <Card data={cake2} />}/>
<Route exact path="/" component={() => <Card data={cake3} />}/>
</div>
</div>



<Route exact path="/Addcackedetails" component={Addcackedetails}/>
<Route exact path="/Signup" component={Signup}/>
    
      </>
  );
}

export default App;
