// 'use client'
// import React, { useEffect, useState } from 'react';
import bikes from '../../../../public/bikes.json'
import Image from 'next/image';
import OurBikesDetails from '../OurBikesDetails/OurBikesDetails';

const OurBikes = async() => {
    // const [bikes, setBikes] = useState([]);

    // const res = await fetch('bikes.json');
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const bikes = await res.json();

    // useEffect(() =>{
    //     // fetch('https://jsonplaceholder.typicode.com/users')
    //     fetch('bikes.json')
    //     .then(res => res.json())
    //     .then(data => setBikes(data))
    // },[])
    return (
        <section className='text-center'>
            <h2 className='text-3xl font-bold md:text-3xl lg:text-4xl'>Our Bikes</h2>
            <p>Which bike is the best for you? {bikes.length}</p>

            {/* {
                bikes.map(bike => <li key={bike.id}>{bike.title}</li>)
                // bikes.map(bike => <li key={bike.id}>{bike.name}</li>)
            } */}
            {/* {
                bikes.map(bike =>{
                    <OurBikesDetails
                    key={bike.id}
                    bike={bike}
                    ></OurBikesDetails>
                })
            } */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {
                bikes.map(bike =><>
                {/* <section className="flex"> */}
                <div className="card card-compact w-64 bg-base-100 shadow-xl">
                    <figure><Image src={bike.image} width={200} height={100} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">{bike.title}</h2>
                        <div className='flex justify-between'>
                            <div className='text-left'>
                            <p>Hourly Rate</p>
                            <p>Daily Rate</p>
                            <p>Online</p>
                            </div>
                            <div className='text-left'>
                                <p> {bike.hourlyRate}</p>
                                <p> {bike.dailyRate}</p>
                                <p> {bike.online}</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                        <button class="btn btn-primary btn-sm w-full bg-primary font-normal text-white text-lowercase">Book Now</button>

                        {/* new  */}
                        </div>
                    </div>
                </div>
                {/* </section> */}
                </>)
            }
            </section>


        </section>
    );
};

export default OurBikes;