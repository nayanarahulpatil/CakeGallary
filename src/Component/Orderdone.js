import { useHistory } from 'react-router-dom';
export default function Orderdone() {
    const history = useHistory();
    function shopping() {
        history.push("/")
    }
    return(
        <>
        <div className=" bg-light rounded px-5 py-4 mt-5 shadow" style={{ width: "50%", margin: "auto" }}>
            <h3>Your order placed Succsefully</h3>
            <button onClick={shopping} type="submit" className="btn btn-primary mt-3">CONTINUE SHOPPING</button>
        </div>
        </>
    )
    
}