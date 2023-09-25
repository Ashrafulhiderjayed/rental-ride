import React from 'react';
import './Footer.css';
import { FaBicycle, FaFacebook, FaTwitter, FaInstagram, FaHeart, FaYoutube, FaLinkedin, FaLinkedinIn, FaYoutubeSquare  } from 'react-icons/fa';
import Image from 'next/image';
import Fimage from '../../images/image-demo4_optimized.png';

const Footer = () => {
    return (
      <section className='footer-banner'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="rgb(8, 40, 82)" fill-opacity="1" d="M0,96L120,90.7C240,85,480,75,720,74.7C960,75,1200,85,1320,90.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        
        {/* <!-- Footer content --> */}
        <g fill="white" font-size="16">
          
          {/* */}
          <text x="47.5%" y="140" text-anchor="middle" alignment-baseline="middle">
          About us | Contact | About us
          </text>
          {/* <!-- Contact information --> */}
          <text x="50%" y="230" text-anchor="middle" alignment-baseline="middle">
            Address: 123 Main St | Phone: (123) 456-7890 | Email: info@rent.com
          </text>

          {/* copyright */}
          <text x="50%" y="300" text-anchor="middle" alignment-baseline="middle">
          Copyright © 2023 - All right reserved           
          </text>
        </g>
        <FaTwitter x="40%" y="160" text-anchor="middle" alignment-baseline="middle" size={35} color="white" />
        <FaYoutube x="46%" y="160" text-anchor="middle" alignment-baseline="middle" size={35} color="white" />
        <FaLinkedin x="52%" y="160" text-anchor="middle" alignment-baseline="middle" size={35} color="white" />
      </svg>

      </section>

    );
};

export default Footer;