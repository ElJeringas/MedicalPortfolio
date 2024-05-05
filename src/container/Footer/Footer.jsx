import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='section__container footer__container'>
          <div className='footer__col'>
            <h3>Medical<span>Portfolio</span></h3>
            <p>
              Duis exercitation ut aliquip tempor qui elit amet quis reprehenderit occaecat.
              Culpa deserunt officia nostrud dolor non aliquip minim.
            </p>
            <p>
              Ea labore consequat officia esse irure laboris aute.
            </p>
          </div>
          <div className='footer__col'>
            <h4>About</h4>
            <p>Home</p>
            <p>Work</p>
            <p>Blog</p>
            <p>Terms and Conditions</p>
          </div>
          <div className='footer__col'>
            <h4>Social Network</h4>
            <p><a><FaFacebook/></a>Facebook</p>
            <p><a><IoLogoWhatsapp/></a>Whatsapp</p>
            <p><a><IoLogoInstagram/></a>Instagram</p>
          </div>
          <div className='footer__col'>
            <h4>Contact</h4>
            <p><a><MdLocationPin/></a> Some direction. Ave. 95-45</p>
            <p><a><MdEmail/></a> example@example.com</p>
            <p><a><FaPhoneAlt/></a> +59398888888</p>
          </div>
        </div>
        <div className='footer__bar'>
            <div className='footer__bar__content'>
              <p>Copyright © 2024 DigitalCanvas. All rights reserved. </p>
            </div>
          </div>
    </footer>
  )
}

export default Footer