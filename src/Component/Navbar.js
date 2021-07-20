
import { useState } from "react"
export function Navbar (){

  var [title, settitle]=useState("cake");

  function btnsearch(e){
  alert("hiii");
    e.preventDefault();
    var inputtitle = document.getElementById('inputsearch').value;
    settitle(inputtitle)

  }
  function btn_addcake_details(){

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
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <button onClick={btn_addcake_details} class="btn  btn-info mr-2 my-sm-0" >Add Cake Detail</button>
      <form class="form-inline my-2 my-lg-0">
        <input id="inputsearch" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={btnsearch} class="btn btn-info my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
        
}
