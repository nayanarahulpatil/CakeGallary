import { useHistory } from 'react-router-dom';
import axios from "axios"

export function CakeCard(props) {
    const history = useHistory();
   
   
    function showcakedetail(e){ 
       
        //we can do it using serch query also where we pass data in url
        var url = "/Cakedetails?q="+props.data.cakeid
        history.push(url);
       
    }
    var datacake={name:props.data.name,
        cakeid:props.data.cakeid,
        price:props.data.price,
        weight:props.data.weight,
        image:props.data.image} 

    /*function additme(e){ 
    console.log("dataadded into the caer from home",props.data.weight)
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
          alert("Item added into Cart")
        },(error)=>{
          console.log("error from all cakes api" , error)
        })
    }*/
    return (
        <>
     
            <div  className=" rounded-bottom shadow  bg-light m-3 gallary_img"  style={{width:"20rem"}}>
               
                <img src={props.data.image} className="card-img-top" alt="..."  style={{maxHeight:"15rem"}}  />
                
                <div className="card-body text-center">
                    <h5 className="card-title">{props.data.name}</h5>
                    <p className="card-text">{props.data.description}</p>
                    <button className="btn btn-primary" onClick={showcakedetail} >Cake Details</button>
                    
                </div>
                </div>
            
         
        </>
    );
}
