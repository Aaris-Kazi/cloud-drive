import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import googledrive from '../assets/googledrive.svg'

import { FaUserCircle } from "react-icons/fa";
import SubSearchBar from './SubSearchBar';
import ProfilePopOver from './ProfilePopOver';

function HomeNavStickBar() {

    const [showPopover, setShowPopover] = useState(false);
    const popoverRef = useRef(null);

    const togglePopover = () => setShowPopover((prev) => !prev);

    const handleClickOutside = (event) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target)) {
            setShowPopover(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);


    return (
        <nav className="navbar sticky-top bg-body-tertiary" ref={popoverRef}>
            <div className="container-fluid">
                <Link to={'/'} className='navbar-brand'>
                    <img src={googledrive} alt="Bootstrap" width="30" height="24" />
                    Cloud Drive
                </Link>

                <div className="row">
                    <div className="col homenavStick">
                        <SubSearchBar />
                    </div>
                    <div className="col-3 homenavStick">
                        <button type="button" className='btn btn-light user' onClick={togglePopover}><FaUserCircle /></button>
                    </div>
                    {showPopover && (
                        <ProfilePopOver />
                    )}
                </div>
            </div>
        </nav>
    )
}

export default HomeNavStickBar
