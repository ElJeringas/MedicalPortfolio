import React from 'react';
import './Header.css';
import doctor from '../../assets/doctor.png'
import { FaUser } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
const Header = () => {
  return (
    <div className='header'>
        <div className='content'>
            <h1><span>Get Quick<br/><strong>Medical Services</strong></span></h1>
            <p>
                Nostrud in quis velit ad cillum nisi incididunt occaecat laborum consectetur ut adipisicing et. Deserunt enim incididunt sunt nisi commodo proident reprehenderit qui ullamco aliquip occaecat. Cillum et aute laborum dolore consequat pariatur cillum dolor officia magna aliqua est. Velit magna elit et laborum. Deserunt cillum sunt amet id aute esse ut est enim.
            </p>
            <button className='btn'>Get Services</button>
        </div>
            <div className='image'>
              <span className='image__bg'></span>
              <img src={doctor} alt='doctor'/>
              <div className='image__content image__content__1'>
                <span>
                  <FaUser color='#209677' size={'20px'}/>
                </span>
                <div className='details'>
                  <h4>+1234</h4>
                  <p>Active Clients</p>
                </div>
              </div>
              <div className='image__content image__content__2'>
                <ul>
                  <li>
                    <span><FaCheck color='#209677' size={'20px'}/></span>
                    Get 20% off on every 1st month
                  </li>
                  <li>
                    <span><FaCheck color='#209677' size={'20px'}/></span>
                    Expert doctors
                  </li>
                </ul>
              </div>
            </div>
    </div>
  )
}

export default Header;