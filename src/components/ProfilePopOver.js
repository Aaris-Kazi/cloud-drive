import { RiImageCircleAiFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

import '../pages/css/Popover.css'
function ProfilePopOver() {



    return (
        <div className='card text-end popup'  >

            <div className='card-body'>
                <div className='row'>
                    <div className='col text-start'><RiImageCircleAiFill className='image-icon' /></div>
                    <div className='col'>
                        <div className='row'><h6>Aaris Kazi</h6></div>
                        <div className='row'>aariskazi@gmail.com</div>
                        <div className='row'><Link to={''}>My profile</Link></div>
                    </div>
                </div>
                <div className='dash'></div>
                <Link to={''} className='btn btn-primary'>Logout</Link>
            </div>
        </div>

    )
}

export default ProfilePopOver
