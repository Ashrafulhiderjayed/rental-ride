import React from 'react';
import Image from 'next/image';

// const OurBikesDetails = ( {bike} ) => {
const OurBikesDetails = ( props ) => {
    const {image, Title, HourlyRate, DailyRate, Online} = props.bike;
    return (
        <section className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><Image src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            {/* new  */}
            </div>
        </div>
        </section>
    );
};

export default OurBikesDetails;