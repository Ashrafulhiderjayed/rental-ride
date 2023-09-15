import React from 'react';
import Image from 'next/image';
import Nexticon from '../../../images/nex-step-icon.png'
import { FaBicycle, FaBiking, FaMoneyCheckAlt } from 'react-icons/fa';

const Follow3Steps = () => {
    return (
        <section className='text-center'>
        <p className="font-heebo text-primary">HOW IT WORKS</p>
          <h3 className="font-playfair text-4xl my-6 font-bold">Follow these 3 steps</h3>
          <div className='flex justify-between pt-9'>
              {/* FIrst Column---- */}
          <div className='flex-col text-center'>
            <div className='bg-primary rounded-lg px-7 py-4 flex justify-center mx-auto w-24'><FaBicycle className='text-center font-extrabold text-6xl text-white'></FaBicycle></div>
            <h4 className='my-6 font-bold text-3xl'>Select a bike</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <Image className='w-64 mx-6 mt-10' src={Nexticon} alt='next-step-image'></Image>
          </div>

            {/* Second Column---- */}
          <div className='flex-col text-center'>
            <div className='bg-primary rounded-lg px-7 py-4 flex justify-center mx-auto w-24'><FaMoneyCheckAlt className='text-center font-extrabold text-6xl text-white'></FaMoneyCheckAlt></div>
            <h4 className='my-6 font-bold text-3xl'>Set a date</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <Image className='w-64 mx-6 mt-10' src={Nexticon} alt='next-step-image'></Image>
          </div>

            {/* Third Column---- */}
          <div className='flex-col text-center'>
            <div className='bg-primary rounded-lg px-7 py-4 flex justify-center mx-auto w-24'><FaBiking className='text-center font-extrabold text-6xl text-white'></FaBiking></div>
            <h4 className='my-6 font-bold text-3xl'>Pick up the product</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          </div>
      </section>
    );
};

export default Follow3Steps;