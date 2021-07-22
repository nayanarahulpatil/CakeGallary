import { Link } from "react-router-dom";
import { useState } from "react"

export function Navbar (){

  var [title, settitle]=useState("Cake Gallary");

  function btnsearch(e){
  alert("hiii");
    e.preventDefault();
    var inputtitle = document.getElementById('inputsearch').value;
    settitle(inputtitle)

  }
 
    return(
    <nav class="navbar navbar-expand-lg ">
    <a class="navbar-brand" href="#" >{title}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <Link to="/" className="nav-link  my-sm-0">Home</Link>
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

     <Link to="/Login"  className="btn btn-primary  ml-2 my-sm-0" style={{color:"white",textDecoration:"none"}}>Login</Link>
    </div>
  </nav>
  )
        
}
