import React from 'react'
import { Link } from 'react-router-dom';

function NavbarItems({ itemName, link}) {
    return (
        <li className='navbar-item'>
            <Link to={link} className='nav-link'>{itemName}</Link>
        </li>
    )
}

export default NavbarItems;
