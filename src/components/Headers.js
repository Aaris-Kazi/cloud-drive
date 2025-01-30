import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../pages/css/navbar.css'
import googledrive from '../assets/googledrive.svg'
import NavbarItems from './NavbarItems';

const Headers = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid navbar">

        <button className="navbar-toggler button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Cloud Drive</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          {isSmallScreen && (
            <div className="offcanvas-body">
              <ul className='navbar-nav'>
                <NavbarItems itemName={'OneDrive'} link={'#'} />
                <NavbarItems itemName={'Plan'} link={'#'} />
                <NavbarItems itemName={'Download'} link={'#'} />
                <NavbarItems itemName={'Features'} link={'#'} />
                <NavbarItems itemName={'Resources'} link={'#'} />
              </ul>
            </div>
          )}
        </div>



      </div>
    </nav>
  )
}

export default Headers;
