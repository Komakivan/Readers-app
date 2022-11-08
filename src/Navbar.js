import React from 'react'
import logo from './logo.jpg'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            
            <img src={logo}
                 width="50"
                 height="50"
                 className="d-inline-block align-top"
                 alt="logo"
            />
            <h1 className='brand-name'>Reader Space</h1>
        </nav>
    </div>
  )
}

export default Navbar