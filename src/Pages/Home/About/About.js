import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row">
   <div className='w-1/2 relative'>
        <img className='rounded-lg w-4/5 h-full shadow-2xl' src={person} alt=''></img>
        <img className='absolute w-3/5 right-4 top-1/2 border-6 rounded-lg shadow-2xl' src={parts} alt=''></img>
   </div>
    <div className='w-1/2'>
    <p className='text-2xl font-bold text-orange-600 my-5'>About Us</p>
      <h1 className="text-5xl font-bold">
      We Are Qualified <br />
      & of experience <br />
      in this field 
      </h1>
      <p className="py-6">Car servicing for many of us just means dropping your car off at a garage because the light has come on on your dash, reminding you it needs to be done.</p>
      <p className="py-6">A simple way to remember your annual maintenance requirements and the difference between them (particularly if you have a car warranty to keep valid) is that an MOT test offers a visual inspection, whereas during car servicing the mechanical functioning of your car is inspected & tweaked.</p>
      <button className="btn bg-orange-600 text-white border-none">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;