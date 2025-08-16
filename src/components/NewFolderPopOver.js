import "../pages/css/FolderPopOver.css"

import { useState } from "react";

const NewFolderPopOver = ({ show, onClose, onSubmit, superPath, setShowPopup, setError, setdataFolder }) => {
    const [inputValue, setInputValue] = useState('');

    if (!show) return null;

    const handleSubmit = async (inpValue) => {
        if (superPath === undefined) {
            superPath = "/"
        } else {
            superPath = superPath + "/"
        }
        onSubmit(superPath, inpValue, setShowPopup, setError, setdataFolder, setInputValue);
        setInputValue('');
    };

    const handleCancel = () => {
        setInputValue('');
        onClose();
    };

    return (
        <div className="container popup-backdrop">
            <div className="row popup-modal">
                <h4>Enter Text</h4>
                <input
                    className="form-control"
                    type="text"
                    value={inputValue}
                    placeholder="Enter folder name..."
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="popup-buttons">
                    <button className="btn btn-primary" onClick={(e) => handleSubmit(inputValue)}>Submit</button>
                    <button className="btn btn-danger"onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default NewFolderPopOver