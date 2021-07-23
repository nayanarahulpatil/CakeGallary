import { useHistory } from 'react-router-dom';


export function CakeCard(props) {
    const history = useHistory();
    function showcakedetail(e){ 
       
        //we can do it using serch query also where we pass data in url
        var url = "/Cakedetails?q="+props.data
        history.push(url);
       
    }
    return (
        <>
            <div class="card p-3 m-3 border-0 flex-even " >
                <img src={props.data.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.data.name}</h5>
                    <p class="card-text">{props.data.description}</p>
                    <button className="btn btn-primary" onClick={showcakedetail} >Cake Details</button>
                </div>
            </div>
        </>
    );
}
