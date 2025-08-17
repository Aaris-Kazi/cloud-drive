import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { FaUserFriends } from "react-icons/fa";
import { IoMdHome, IoMdFolderOpen } from "react-icons/io";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuFileAudio } from "react-icons/lu";
import { IoIosAddCircle } from "react-icons/io";


import "../pages/css/HomePage.css"


import { Link } from 'react-router-dom';
import AddPopOver from './AddPopOver';

function HomeNavBar({ setActivePanel, handleOpen, openFileInput }) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
    const [showPopover, setShowPopover] = useState(false);
    const popoverRef = useRef(null);

    const togglePopover = () => setShowPopover((prev) => !prev);

    const handleClickOutside = (event) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target)) {
            setShowPopover(false);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    if (isSmallScreen) {
        return (
            <ul className='nav flex-column home' ref={popoverRef}>
                <li className='nav-item'>
                    <Link to={''} className='nav-link active add' onClick={togglePopover}><IoIosAddCircle className='add-button' /></Link>
                    {showPopover && (<AddPopOver handleOpen={handleOpen} openFileInput={openFileInput} />)}
                </li>
                <li className='nav-item' onClick={() => setActivePanel("home")}>
                    <Link to={''} className='nav-link active'><IoMdHome /></Link>
                </li>
                <li className='nav-item' onClick={() => setActivePanel("files")}>
                    <Link to={''} className='nav-link active'><IoMdFolderOpen /></Link>
                </li>
                <li className='nav-item' onClick={() => setActivePanel("photos")}>
                    <Link to={''} className='nav-link active'><MdOutlineInsertPhoto /></Link>
                </li>
                <li className='nav-item'>
                    <Link to={''} className='nav-link active'><FaUserFriends /></Link>
                </li>
                <li className='nav-item'>
                    <Link to={''} className='nav-link active'><RiDeleteBin6Line /></Link>
                </li>
                <li className='nav-item' onClick={() => setActivePanel("audios")}>
                    <Link to={''} className='nav-link active'><LuFileAudio /></Link>
                </li>
            </ul>
        )

    } else {

        return (
            <ul className='nav flex-column home' ref={popoverRef}>
                <li className='nav-item'>
                    <Link to={''} className='nav-link active' onClick={togglePopover}><IoIosAddCircle className='add-button' /></Link>
                    {showPopover && (<AddPopOver handleOpen={handleOpen} openFileInput={openFileInput} />)}
                </li>
                <li className='nav-item' onClick={() => setActivePanel("home")} >
                    <Link to={''} className='nav-link active'><IoMdHome /> Home</Link>
                </li>
                <li className='nav-item' onClick={() => setActivePanel("files")}>
                    <Link to={''} className='nav-link active'><IoMdFolderOpen /> My files</Link>
                </li>
                <li className='nav-item' onClick={() => setActivePanel("photos")}>
                    <Link to={''} className='nav-link active'><MdOutlineInsertPhoto /> Photos</Link>
                </li>
                <li className='nav-item'>
                    <Link to={''} className='nav-link active'><FaUserFriends /> Shared</Link>
                </li>
                <li className='nav-item'>
                    <Link to={''} className='nav-link active'><RiDeleteBin6Line /> Recycle</Link>
                </li>
                <li className='nav-item' onClick={() => setActivePanel("audios")}>
                    <Link to={''} className='nav-link active'><LuFileAudio /> Audio</Link>
                </li>
            </ul>
        )
    }
}

export default HomeNavBar;
