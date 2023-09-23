import React from 'react';
import Image from 'next/image';
import SingleCycle from '../../../images/image-demo4_optimized.png'

const Friendly = () => {
    return (
        <section className='my-32 items-center'>
      <div className="flex">
        <div className="w-2/5 z-10">
        <div className="w-4/6 ms-40 h-full rounded-full bg-primary"></div>
          <Image className=' h-full mx-8 relative bottom-80 left-10 -top-80' src={SingleCycle} alt='next-step-image'></Image>
        </div>


        <div className="w-3/6 ms-24 p-5 flex-col items-baseline">
          <p className="font-heebo text-primary">ABOUT US</p>
          <h3 className='text-3xl font-bold my-4'>Friendly, fast process and good <br /> response</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.<br />
          Ut enim ad minim veniam.</p>
          <div className='flex justify-between mr-8 mt-3'>
            <div className='flex-col'>
              <h2 className='font-bold text-primary text-3xl'>120</h2>
              <p>Client</p>
            </div>
            <div className='flex-col'>
              <h2 className='font-bold text-primary text-3xl'>350</h2>
              <p>Product</p>
            </div>
            <div className='flex-col'>
              <h2 className='font-bold text-primary text-3xl'>10</h2>
              <p>Company</p>
            </div>
            <div className='flex-col'>
              <h2 className='font-bold text-primary text-3xl'>720</h2>
              <p>Bikes</p>
            </div>
          </div>
        </div>
  
      </div>
      </section>
    );
};

export default Friendly;