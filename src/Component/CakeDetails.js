import { useState, useEffect } from "react"
import axios from "axios"
import queryString from "query-string";
import StarRatings from 'react-star-ratings';
import Navbar from '../Component/Navbar';
import Loader from "react-loader-spinner"

 function Cakedetails(props) { 
    //here we used quersting
    var query = queryString.parse(props.location.search).q

    var [cakedetails , setCakedetails]  = useState({})
    var[loader,setloader]=useState(true)

    var datacake={name:cakedetails.name,
        cakeid:cakedetails.cakeid,
        price:cakedetails.price,
        weight:cakedetails.weight,
        image:cakedetails.image} 
        
    useEffect(()=>{
        let apiurl = "https://apifromashu.herokuapp.com/api/cake/" + query
    
        axios(
          {
            method:'get',
           url:apiurl    
         }
        ).then((response)=>{
          console.log("response from  cake details api" , response.data.data)
          setCakedetails(response.data.data)
          setloader(false)
        },(error)=>{
          console.log("error from all cakes api" , error)
        })
     
        
       }, [])
      
       function addtocartbtn(){
         alert("Item added into Cart")
        let apiurl = "https://apifromashu.herokuapp.com/api/addcaketocart"
    
        axios(
          {
            headers:{authtoken:localStorage.token},
            method:'post',
           url:apiurl,
           data: datacake  // {name,cakeid,price,weight,image}
         }
        ).then((response)=>{
          console.log("response from addto cart api" , response.data.data)
        },(error)=>{
          console.log("error from all cakes api" , error)
        })
       }
     
       
    return (
        <>
        <Navbar></Navbar>
        {loader && <div className="d-flex vh-100 "> 
             <Loader className="w-100 mt-5  d-flex justify-content-center align-items-center"
        type="ThreeDots" color="#00BFFF" height={80} width={80}/></div>}
{!loader && 
  

        <div className="maincakedetails w-100 h-100 ">
        <div className="container  w-100 h-100 p-2 containercakedetails mt-5">
            <div className="d-flex flex-xl-row flex-column justify-content-xl-between align-self-center m-3 ">
                <div className="float-left   cartimag ">
                
                <div className="p-3 rounded w-100" >
                <img src={cakedetails.image}  className="card-img-top" alt="..." />
                </div>
                
                <div className="m-2 d-flex flex-column  p-4 ingridentcontainer">
                    <h3>Ingrediant</h3>
                    {cakedetails.ingredients &&<ul className="d-flex flex-wrap justify-content-start align-items-center">
                    {cakedetails.ingredients.map((data)=>(
            <li className="ingredentitem">{data}</li>
          ))}
                    </ul>}
                    
                </div>
                </div>
           
            <div className=" text-center cartdetailsholder ">
               
               <div className="h-100  d-flex justify-content-center align-self-center ">
                    <div className="bg-secondar w-100 p-lg-5 align-self-center"> 
                    <h1>{cakedetails.name}</h1>
                    <StarRatings
          rating={cakedetails.ratings}
          starRatedColor="blue"
         
          numberOfStars={5}
          name='rating'
          starDimension="25px"
        starSpacing="1px"
        />
                     <p className="card-text my-2 font-weight-light ">{cakedetails.reviews} reviews</p>
                     <p className="card-text my-2">{cakedetails.description}</p>
                     <h5 className="my-4">Current Price: <span>{cakedetails.price}</span></h5>
                     <h5 className="card-text  my-4">Weight:<span>o.5</span>Kg</h5>
                     <h5 className="card-text  my-4">Flavour: <span>{cakedetails.flavour}</span></h5>
                     <h5 className="card-text  my-4">Occasion: <span>{cakedetails.type}</span></h5>
                     <button onClick={addtocartbtn} className=" btn btn-primary btnaddtocart">Add To Cart</button>
               </div>
               </div>
            </div>
            </div>
            </div>
            </div>}
        </>
    );
}
export default Cakedetails