import { RiImageCircleAiFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import '../pages/css/Popover.css'




function ProfilePopOver() {
    const username = localStorage.getItem("cloud_drive_username");
    const email = localStorage.getItem("cloud_drive_email");
    
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem("cloud_drive_username");
        localStorage.removeItem("cloud_drive_email");
        localStorage.removeItem("cloud_drive_access_token"); // Remove token
        navigate("/"); // Redirect to home page
    };

    return (
        <div className='card text-end popup'  >

            <div className='card-body'>
                <div className='row'>
                    <div className='col text-start'><RiImageCircleAiFill className='image-icon' /></div>
                    <div className='col'>
                        <div className='row'><h6>{username}</h6></div>
                        <div className='row'>{email}</div>
                        <div className='row'><Link to={''}>My profile</Link></div>
                    </div>
                </div>
                <div className='dash'></div>
                <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
            </div>
        </div>

    )
}

export default ProfilePopOver
