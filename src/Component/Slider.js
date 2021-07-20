var img ="Video_mage.png";

export function Slider (){
    return(
        <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src= {img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img}  class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
</>
    );
}