import React from 'react'
import { Link } from 'react-router-dom';
import '../pages/css/navbar.css'
import googledrive from '../assets/googledrive.svg'
import NavbarItems from './NavbarItems';

const Headers = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid navbar">
        
        <button className="navbar-toggler button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to={'/'} className='navbar-brand'>
          <img src={googledrive} alt="Bootstrap" width="30" height="24" />
          Cloud Drive
        </Link>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <NavbarItems itemName={'OneDrive'} link={'#'} />
            <NavbarItems itemName={'Plan'} link={'#'} />
            <NavbarItems itemName={'Download'} link={'#'} />
            <NavbarItems itemName={'Features'} link={'#'} />
            <NavbarItems itemName={'Resources'} link={'#'} />
          </ul>
        </div>


      </div>
    </nav>
  )
}

export default Headers;
