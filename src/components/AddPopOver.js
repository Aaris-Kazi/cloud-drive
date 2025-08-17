import { RiFileUploadLine, RiFolderUploadLine } from "react-icons/ri";
import { FcFolder } from "react-icons/fc";
import '../pages/css/Popover.css'

const AddPopOver = ({ handleOpen, openFileInput }) => {

    return (
        <div className='card popup add'>
            <div className='card-body add'>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item popup'><button className='btn btn-light addPopOver' onClick={handleOpen}><FcFolder className='margin-right' /> Folder</button></li>
                    <li className='list-group-item popup'><button className='btn btn-light addPopOver' onClick={openFileInput}><RiFileUploadLine className='margin-right' /> Files upload</button></li>
                    <li className='list-group-item popup'><button className='btn btn-light addPopOver'><RiFolderUploadLine className='margin-right' /> Folder upload</button></li>
                </ul>
            </div>
        </div>
    )
}

export default AddPopOver
