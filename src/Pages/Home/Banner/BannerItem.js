import React from 'react';
import './Banner.css'

const BannerItem = ({slide}) => {
  console.log(slide.image)
    const {image,id,prev,next} = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
          <img src={image} alt='img1' className="w-full rounded-xl" /> 
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className='text-6xl font-bold text-white'>
                Affordable<br/>
                Price For <br/>
                Car Servicing
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className=' text-xl text-white font-bold'>The Best Service ever we provide to protect your car engine safe n and get hish performance.</p>
        </div>
        <div className="absolute flex justify-starttransform -translate-y-1/2 w-2/5 left-24 top-3/4">
         <button className='btn btn-warning mr-5'>Hello</button>
         <button className='btn btn-outline btn-warning'>Hello</button>
         </div> 
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`}  className="btn btn-circle bg-orange-600 border-none mr-5 text-white">❮</a> 
          <a href={`#slide${next}`}  className="btn btn-circle bg-orange-600 border-none text-white">❯</a>
        </div>
      </div> 
    );
};

export default BannerItem;