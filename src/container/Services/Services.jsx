import React from 'react';
import { BiSolidDonateHeart } from "react-icons/bi";
import { RiHealthBookFill } from "react-icons/ri";
import { FaHospital } from "react-icons/fa";
import './Services.css';
const Services = () => {
  return (
    <section className='section__container service__container'>
        <div className='service__header'>
            <div className='service__header__content'>
                <h2>
                    Our Services
                </h2>
                <p>Dolor Lorem labore mollit ipsum.Esse sunt tempor nisi amet.Ea nulla ea nulla cupidatat.</p>
            </div>
            <button className='btn service__btn'>Ask a Service</button>
        </div>
        <div className='service__grid'>
            <div className='service__card'>
                <span><BiSolidDonateHeart size={'2rem'}/></span>
                <h4>Laboratory test</h4>
                <p>
                    Sit pariatur id tempor eiusmod exercitation exercitation Lorem excepteur sint esse aliquip. Adipisicing aute exercitation ipsum ea elit.
                </p>
                <a href='#'>Learn more</a>
            </div>
            <div className='service__card'>
                <span><RiHealthBookFill size={'2rem'}/></span>
                <h4>Health Check</h4>
                <p>
                    Sit pariatur id tempor eiusmod exercitation exercitation Lorem excepteur sint esse aliquip. Adipisicing aute exercitation ipsum ea elit.
                </p>
                <a href='#'>Learn more</a>
            </div>
            <div className='service__card'>
                <span><FaHospital size={'2rem'}/></span>
                <h4>General Care</h4>
                <p>
                    Sit pariatur id tempor eiusmod exercitation exercitation Lorem excepteur sint esse aliquip. Adipisicing aute exercitation ipsum ea elit.
                </p>
                <a href='#'>Learn more</a>
            </div>
        </div>
    </section>
  )
}

export default Services