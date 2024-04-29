import React from 'react';
import './NavBar.css';
const NavBar = () => {
  return (
      <nav>
            <div className='nav__logo'>Medical Portfolio</div>
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