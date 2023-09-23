'use client'
import React, { useEffect, useState } from 'react';
import OurBikesDetails from '../OurBikesDetails/OurBikesDetails';

const OurBikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() =>{
        fetch('bikes.json')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])
    return (
        <section className='text-center'>
            <h2 className='text-3xl font-bold md:text-3xl lg:text-4xl'>Our Bikes</h2>
            <p>Which bike is the best for you? {bikes.length}</p>

            {
                bikes.map(bike =>{
                    <OurBikesDetails
                    key={bike.id}
                    bike={bike}
                    ></OurBikesDetails>
                })
            }
        </section>
    );
};

export default OurBikes;