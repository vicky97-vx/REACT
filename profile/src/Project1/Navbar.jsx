import React from 'react'
import './Navbar'

const Navbar = () => {
  return (
    <div>
      <header className='header'>
        <a href='#' className='logo'><span>VICKY</span></a>
          <ul className='nav-links'>
           <li><a href="#home">Home</a></li>
           <li><a href='#skills'>Skills</a></li>
           <li><a href='#service'>Service</a></li>
           {/* <button id="theme-toggle">Toggle Dark Mode</button> */}
          </ul>
      </header>
    </div>
    
  )
}

export default Navbar
