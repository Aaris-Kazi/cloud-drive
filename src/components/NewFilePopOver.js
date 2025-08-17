import React, { useState } from 'react'

function NewFilePopOver({ show, onSubmit, onClose, superPath, setShowPopup, setError, setdataFiles }) {
    const [files, setFiles] = useState([]);
    if (!show) return null;

    // handle normal input selection
    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        setFiles([]);
        setFiles((prev) => [...prev, ...newFiles]);
    };

    // handle drag & drop
    const handleDrop = (e) => {
        e.preventDefault();
        const newFiles = Array.from(e.dataTransfer.files);
        setFiles((prev) => [...prev, ...newFiles]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleSubmit = async () => { 
        for (let i = 0; i < files.length; i++) {
            const filename = files[i];
            await onSubmit(superPath, filename, setShowPopup, setError, setdataFiles );
            
        }
        setFiles([]);
    };

    const handleCancel = () => {
        onClose();
    };


    return (
        <div className="container popup-backdrop">
            <div className="row popup-modal">

                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition"
                ></div>

                <p className="text-gray-600">Drag & drop files here</p>
                <p className="text-sm text-gray-400">or</p>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="mt-2"
                />
                <div className="popup-buttons">
                    <button className="btn btn-primary" onClick={(e) => handleSubmit()}>Submit</button>
                    <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
                </div>

                <div className="mt-4">
                    <h3 className="font-medium">Selected Files:</h3>
                    <ul className="list-disc pl-5">
                        {files.map((file, index) => (
                            <li key={`${file.name}-${index}`} className="text-gray-700">
                                {file.name} ({Math.round(file.size / 1024)} KB)
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default NewFilePopOver