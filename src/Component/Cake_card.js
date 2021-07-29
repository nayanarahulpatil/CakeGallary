import { useHistory } from 'react-router-dom';


export function CakeCard(props) {
    const history = useHistory();
   
   
    function showcakedetail(e){ 
       
        //we can do it using serch query also where we pass data in url
        var url = "/Cakedetails?q="+props.data.cakeid
        history.push(url);
       
    }
    return (
        <>
     
            <div  className=" rounded-bottom shadow  bg-light m-3 gallary_img"  style={{width:"20rem"}}>
               
                <img src={props.data.image} className="card-img-top" alt="..."  style={{maxHeight:"15rem"}}  />
                
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <p className="card-text">{props.data.description}</p>
                    <button className="btn btn-primary" onClick={showcakedetail} >Cake Details</button>
                
                </div>
                </div>
            
         
        </>
    );
}
