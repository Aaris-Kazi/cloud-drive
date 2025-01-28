import React from 'react'
import { RiFileUploadLine, RiFolderUploadLine } from "react-icons/ri";
import { FcFolder } from "react-icons/fc";
import '../pages/css/Popover.css'

const AddPopOver = () => {
    return (
        <div className='card popup add'>
            <div className='card-body add'>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item popup'><button className='btn btn-light addPopOver'><FcFolder className='margin-right' /> Folder</button></li>
                    <li className='list-group-item popup'><button className='btn btn-light addPopOver'><RiFileUploadLine className='margin-right'/> Files upload</button></li>
                    <li className='list-group-item popup'><button className='btn btn-light addPopOver'><RiFolderUploadLine className='margin-right' /> Folder upload</button></li>
                </ul>
            </div>
        </div>
    )
}

export default AddPopOver
