import React from 'react'
import img1 from "../assets/img/Rectangle 1.jpg";
import img2 from "../assets/img/Rectangle 2.jpg";
import img3 from "../assets/img/Rectangle 3.jpg";
import img4 from "../assets/img/Rectangle 4.jpg";
import img5 from "../assets/img/Rectangle 5.jpg";
import img6 from "../assets/img/Rectangle 6.jpg";
import img7 from "../assets/img/Rectangle 7.jpg";
import img8 from "../assets/img/Rectangle 8.jpg";

function MasonryGrid() {
  return (
    <div className="masonry sm:masonry-sm md:masonry-md">
      <div className="rounded-lg pt-4 break-inside">
        <img src={img1} alt="img-1"></img>
      </div>
      <div className="rounded-lg pt-4 break-inside">
        <img src={img2} alt="img-2"></img>
      </div>
      <div className="rounded-lg pt-4 break-inside">
        <img src={img3} alt="img-3"></img>
      </div>
      <div className="rounded-lg pt-4 break-inside">
        <img src={img4} alt="img-4"></img>
      </div>
      <div className="rounded-lg pt-4 break-inside">
          <img src={img5} alt="img-5"></img>
        </div>
        <div className="rounded-lg pt-4 break-inside">
          <img src={img6} alt="img-6"></img>
        </div>
        <div className="rounded-lg pt-4 break-inside">
          <img src={img7} alt="img-7"></img>
        </div>
        <div className="rounded-lg pt-4 break-inside">
          <img src={img8} alt="img-8"></img>
        </div>
    </div>
    // <div class="masonry sm:masonry-sm md:masonry-md">
    //   {data.map((item, index) => {
    //     return(
    //       <div key={index} class="rounded-lg pt-4 break-inside">
    //         <img src={item.imgSrc} alt="img-gallery"/>
    //       </div>
    //     )
    //   })}
    // </div>        
  )
}

export default MasonryGrid
