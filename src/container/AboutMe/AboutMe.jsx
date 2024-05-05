import React from 'react';
import './AboutMe.css';
import AboutImage from '../../assets/about.png'

const AboutMe = () => {
  return (
    <section className='section__container about__container'>
        <div className='about__content'>
            <h2 >About Me</h2>
            <p>
                Fugiat deserunt amet nulla nisi incididunt et aute cupidatat culpa nisi deserunt sit eu.Commodo cupidatat esse ut commodo in.
                Adipisicing ea laboris nisi mollit laboris magna fugiat amet.Cillum eiusmod anim ipsum officia pariatur voluptate magna dolor ut.
            </p>
            <p>
                Fugiat deserunt amet nulla nisi incididunt et aute cupidatat culpa nisi deserunt sit eu.Commodo cupidatat esse ut commodo in.
                Adipisicing ea laboris nisi mollit laboris magna fugiat amet.Cillum eiusmod anim ipsum officia pariatur voluptate magna dolor ut.
                Consequat eu enim mollit culpa ea anim consequat labore.Fugiat fugiat minim Lorem quis Lorem aute adipisicing ad officia.
            </p>
        </div>
        <div className='about__image'>
            <img src={AboutImage} alt='about pic'/>
        </div>
    </section>
  )
}

export default AboutMe