
import queryString from "query-string";

export function Cakedetails(props) {
    var cakeimage = "cakelava.jpg"
    //here we used quersting
    var query = queryString.parse(props.location.search)
    console.log(JSON.stringify(query))
   
    return (
        <>

        <div class="maincakedetails w-100 h-100">
        <div class="container  w-100 h-100 p-2 containercakedetails">
            <div class="d-flex m-3 ">
                <div class="float-left  w-50">
                
                <div class="p-3 rounded " >
                <img src={cakeimage}  class="card-img-top" alt="..." />
                </div>
                <div class="m-2 d-flex flex-column flex-wrap p-4 ingridentcontainer">
                    <h3>Ingrediant</h3>
                    <ul class="d-flex flex-wrap justify-content-start align-items-center">
                        <li class="ingredentitem">
                            milk
                        </li>
                        <li  class="ingredentitem">
                            Chocalate
                        </li>
                        <li  class="ingredentitem">
                            egg
                        </li>
                        <li  class="ingredentitem">
                         sugar
                        </li>
                        <li  class="ingredentitem">
                         butter
                        </li>
                    </ul>
                    
                </div>
                </div>
           
            <div class=" text-center w-50 ">
               
               <div class="h-100  d-flex justify-content-center align-self-center ">
                    <div class="bg-secondar w-100 p-5 align-self-center"> 
                    <h1>Molten chocolate cake</h1>
                     <p class="card-text my-2 font-weight-light ">100 reviews</p>
                     <p class="card-text my-2">AMolten chocolate cake for a party of 2 people.</p>
                     <h5 class="my-4">Current Price: <span>315</span></h5>
                     <h5 class="card-text  my-4">Weight:<span>o.5</span>Kg</h5>
                     <h5 class="card-text  my-4">Flavour: <span>Orange</span></h5>
                     <h5 class="card-text  my-4">Occasion: <span>Special</span></h5>
                     <button class=" btn btn-primary btnaddtocart">Add To Cart</button>
               </div>
               </div>
            </div>
            </div>
            </div>
            </div>
        </>
    );
}