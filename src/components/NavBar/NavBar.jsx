import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo2.png'
const NavBar = () => {
  return (
      <nav>
            <div className='nav__logo'>
              <img src={logo} alt='logo'/>
              <h1>Medical Portfolio</h1>
            </div>
            <ul className='nav__links'>
                  <li className='link'><a href='#home'>Home</a></li>
                  <li className='link'><a href='#home'>About Me</a></li>
                  <li className='link'><a href='#home'>Courses</a></li>
                  <li className='link'><a href='#home'>Pages</a></li>
                  <li className='link'><a href='#home'>Blog</a></li>
                  <li className='link'><a href='#home'>Contact</a></li>
              </ul>
              <button className='btn'>Register Now</button>
      </nav>
  )
}

export default NavBar