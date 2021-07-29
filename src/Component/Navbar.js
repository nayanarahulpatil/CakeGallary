import { Link } from "react-router-dom";
import { useState} from "react"
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";

 function Navbar (props){
console.log(props)

  const history = useHistory();


  function btnsearch(e){
    var inputtitle = document.getElementById('inputsearch').value;
    if(inputtitle){
      var url = "/search?q="+inputtitle
      history.push(url);
    }else{  history.push("./");}
  
    e.preventDefault();
 
  

  }
  function logoutuser(e){
    e.preventDefault();
    localStorage.clear();
  window.location.reload()
    history.push("./");
  }
  

    return(
     <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
      
    {props.name && <a href="#" className="navbar-brand" >wellcome {props.name}</a>}
    <button className="navbar-toggler nav " type="button " data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <Link to="/" className="nav-link  my-sm-0">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/Product" className="nav-link  my-sm-0">Product</Link>
        </li>
        <li className="nav-item">
        <Link to="/Addcackedetails" className="nav-link  my-sm-0">Add Cake Detail</Link>
        </li>
      </ul>
      
      <form className="form-inline my-2 my-lg-0">
        <input id="inputsearch" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={btnsearch} className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
{ props.loginstatus=== false &&
     <Link to="/Login" className="btn btn-primary ml-lg-2 my-sm-0 ml-sm-0 ml-md-0" style={{color:"white",textDecoration:"none"}}>Login</Link>}
     { props.loginstatus ===true &&
     <form>
     <Link to="/" onClick={logoutuser} className="btn btn-danger ml-lg-2 my-sm-0" style={{color:"white",textDecoration:"none"}}>logout</Link>
     <Link to="/cartitem" className="btn btn-primary  ml-2 my-sm-0" style={{color:"white",textDecoration:"none"}}>Cart</Link>
     </form>}
    </div>
  </nav>
  </>
  )
        
}
export default connect(function(state,props){
return{
  loginstatus:state["Showlogin"]["loginflag"],
  name:state["Showlogin"]["user"]&& state["Showlogin"]["user"]["name"]
}
})(Navbar)
