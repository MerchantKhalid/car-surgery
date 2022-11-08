import React from 'react';

const ServiceCard = ({service}) => {
     const {img,price,title} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-orange-600">{title}</h2>
    <p className='font-bold'> Price:${price}</p>
    <div className="card-actions">
      <button className="btn bg-orange-600 text-white border-none">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;