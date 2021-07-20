var carimage = "unsplash.png";
export function Card(props) {
    console.log(props)
    return (
        <>
            <div class="card p-3 m-3 border-0" style={{ width: "25rem" }}>
                <img src={props.data.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.data.name}</h5>
                    <p class="card-text">{props.data.description}</p>
                    <a href="#" class="btn btn-primary">Add To Tart</a>
                </div>
            </div>
        </>
    );
}