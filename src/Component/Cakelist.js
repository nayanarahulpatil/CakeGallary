import {CakeCard} from './Cake_card'


export function Cakelist(props){
    console.log(props)
var cake1={
    id:1,
    name:"Pound Cake",
    description:"	Sponge cake, cream, food colouring",
    image:"cake3.jpg"
  }
  var cake2={
    id:2,
    name:"Baked Flourless Cake",
    description:"Egg whites, vanilla, and cream of tartar",
    image:"cake1.jpg"
  }
  var cake3={
    id:3,
    name:"Chiffon Cake",
    description:"Apple, caramel icing",
    image:"cake3.jpg"
  }
    return(
        <>
       
<div className="container">
<div className="d-flex  flex-xl-row justify-content-xl-between flex-column">
 <CakeCard data={cake1} /> 
 <CakeCard data={cake2} />
 <CakeCard data={cake3} />
</div>
</div>
        </>
    );
}