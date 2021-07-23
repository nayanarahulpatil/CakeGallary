import { Link } from "react-router-dom";
import { useState} from "react"
import { useHistory } from 'react-router-dom';

export function Navbar (props){
console.log(props)
  var [title, settitle]=useState("Cake Gallary");
  var [login, setlogin]=useState(props.loginstatus);
  const history = useHistory();


  function btnsearch(e){
  alert("hiii");
    e.preventDefault();
    var inputtitle = document.getElementById('inputsearch').value;
    settitle(inputtitle)

  }
  function logoutuser(e){
    e.preventDefault();
    localStorage.clear();
    setlogin(false)
    history.push("./");
  }
  

    return(
     
    <nav class="navbar navbar-expand-lg ">
      
    <button class="navbar-brand"  >{title}</button>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <Link href="/" className="nav-link  my-sm-0">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/Product" className="nav-link  my-sm-0">Product</Link>
        </li>
        <li class="nav-item">
        <Link to="/Addcackedetails" className="nav-link  my-sm-0">Add Cake Detail</Link>
        </li>
      </ul>
      
      <form class="form-inline my-2 my-lg-0">
        <input id="inputsearch" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={btnsearch} class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
{ login=== false &&
     <Link to="/Login"  className="btn btn-primary  ml-2 my-sm-0" style={{color:"white",textDecoration:"none"}}>Login</Link>}
     {login ===true &&
     <form>
     <Link to="/" onClick={logoutuser} className="btn btn-danger  ml-2 my-sm-0" style={{color:"white",textDecoration:"none"}}>logout</Link>
     <Link to="/"   className="btn btn-primary  ml-2 my-sm-0" style={{color:"white",textDecoration:"none"}}>Cart</Link>
     </form>}
    </div>
  </nav>
  )
        
}
