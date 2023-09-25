// 'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Fhelmet from '../../../../public/images/F-helmet.png'
import { FaArrowRight, FaBox, FaBoxOpen, FaBoxTissue, FaBoxes, FaHeadSideCough, FaLock, FaLockOpen, FaMap, FaMapMarked, FaMapMarkedAlt, FaMapMarker, FaMapSigns, FaParachuteBox, FaRegClock, FaUnlock, FaUserLock } from 'react-icons/fa';
import { Capriola } from 'next/font/google';

const IncludedWrental = () => {
    return (
        <section className='bg-grayBG p-4 my-3 rounded-md'>
                <h4 className='text-center font-bold'>Included with every bike rental:</h4>
            <div className='flex flex-wrap justify-between p-4 items-center'>
                <div>
                <Image className='-mt-4' src={Fhelmet} width={50} height={50} alt="Shoes" />
                <h4 className='text-center font-bold mt-1'>Helmet</h4>
                </div>
                <div>
                    <FaUnlock className='font-extrabold text-4xl text-slate-600 w-full text-center' />
                    <h4 className='text-center font-bold p-2'>Bike Lock</h4>
                </div>
                <div>
                    <FaMapMarkedAlt className='font-extrabold text-4xl text-slate-600 w-full text-center' />
                    <h4 className='text-center font-bold p-2'>GPS-Guided Audio Tour</h4>
                </div>
                <div>
                    <FaParachuteBox className='font-extrabold text-4xl text-slate-600 w-full text-center' />
                    <h4 className='text-center font-bold p-2'>Front Basket</h4>
                </div>
            </div>
        </section>
    );
};

export default IncludedWrental;