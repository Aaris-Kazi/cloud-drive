import React from 'react'
import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const SubSearchBar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
    const [isVisible, setIsVisible] = useState(false);

    const openPopup = () => setIsVisible(true);
    const closePopup = () => setIsVisible(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    if (isSmallScreen) {

        return (
            <div>

                <button type="button" className='btn btn-light user' onClick={openPopup}><CiSearch /></button>
                {isVisible && (
                    <form action="" method="get" className='input-group d-flex' role="search">
                        <span className="input-group-text searchbar"><CiSearch /></span>
                        <input className="form-control searchbar" type="search" placeholder="Search everything" aria-label="Search" />
                        <span className="input-group-text close" onClick={closePopup}><IoClose /></span>
                    </form>
                )}
            </div>
        )
    } else {
        return (
            <form action="" method="get" className='input-group d-flex' role="search">
                <span className="input-group-text searchbar"><CiSearch /></span>
                <input className="form-control searchbar" type="search" placeholder="Search everything" aria-label="Search" />

            </form>
        )

    }

}

export default SubSearchBar
