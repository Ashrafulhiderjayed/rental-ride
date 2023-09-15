import React from 'react';
import { FaCheckCircle, FaCubes, FaThumbsUp } from 'react-icons/fa';

const ChooseUs = () => {
    return (
    <section className='my-48'>
      <div className='text-center'>
        <p className='text-primary'>WE ARE REBIKE</p>
        <h3 className='text-3xl font-bold p-5'>Why Choose us</h3>
      </div>
      <div>
      <div className='flex justify-between gap-4'>
        <div className='border rounded flex-col p-8 my-8 shadow-lg hover:shadow-xl'>
          <FaCheckCircle className='text-center text-primary font-extrabold text-6xl'></FaCheckCircle>
          <h4 className='font-bold py-2'>Complete services</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        <div className='border rounded flex-col p-8 my-8 shadow-lg hover:shadow-xl'>
          <FaThumbsUp className='text-center text-primary font-extrabold text-6xl'></FaThumbsUp>
          <h4 className='font-bold py-2'>Complete services</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
        <div className='border rounded flex-col p-8 my-8 shadow-lg hover:shadow-xl'>
          <FaCubes className='text-center text-primary font-extrabold text-6xl'></FaCubes>
          <h4 className='font-bold py-2'>Complete services</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
      </div>
      </div>
    </section>
    );
};

export default ChooseUs;