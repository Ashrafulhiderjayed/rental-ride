import React from 'react';
import Image from 'next/image';
import Headerimg from '../../../images/header-img.png';
import Nexticon from '../../../images/nex-step-icon.png';

const Header = () => {
    return (
        <div className="text-center my-4">
            <p className="font-heebo text-primary">Welcome To RENTAL RIDE</p>
            <h1 className="font-playfair font-bold text-6xl">Meet your cycling needs <br /> every day</h1>
            <button className="btn rounded-full text-white mt-6 bg-primary hover:bg-primaryLight">Explore Bike</button>
            <Image className='mb-10 mx-auto' src={Headerimg} alt='header image'></Image>
      </div>
    );
};

export default Header;