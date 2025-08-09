import { useEffect, useState } from "react";
import Loader from "../Loader";
import { FcFile, FcFolder } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import NewFolderPopOver from "../NewFolderPopOver";
import "../../pages/css/Home.css";
import BreadCrumbsPath from "../BreadCrumbsPath";
import { getFiles, removeFolder, handleSubmit } from "../../utils/FolderOperations";

const MyFiles = ({ setShowPopup, showPopup, handleClose }) => {
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");
    const [currentPath, setCurrentPath] = useState("");
    const [dataDirectory, setdataDirectory] = useState({});
    const [dataFiles, setdataFiles] = useState([]);
    const [dataFolder, setdataFolder] = useState([]);

    const setFolderPath = async (path) => {
        const newPath = currentPath + path + "/";
        setCurrentPath(newPath);
        getFiles(currentPath, setLoader, setdataDirectory, setdataFiles, setdataFolder, setError);

    }

    useEffect(() => {
        getFiles(currentPath, setLoader, setdataDirectory, setdataFiles, setdataFolder, setError);
    }, [currentPath]);

    return (
        <div className="row">
            <span className='h4 button-title'><BreadCrumbsPath setCurrentPath={ setCurrentPath} path={currentPath} /></span>
            {loader && (
                <div className="row loader">
                    <Loader />
                </div>
            )}
            {!loader && error !== "" && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            {!loader && (
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col-2'>Opened</th>
                            <th scope='col-1'>Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(dataDirectory).length === 0 && (
                            <tr><td colSpan="3">No files found.</td></tr>
                        )}

                        {!loader && dataFolder.map(
                            (folder, index) => (
                                <tr>
                                    <td className='table-text' onDoubleClick={() => setFolderPath(folder, setShowPopup, setError, setdataFolder)}><FcFolder className='margin-right-desktop' /> {folder}</td>
                                    <td>5 Feb 2020</td>
                                    <td className='table-text'>Aaris Kazi <MdDeleteForever className="del text-danger" onClick={() => removeFolder(currentPath, folder, setdataFolder, setError)} /></td>
                                </tr>
                            ))
                        }

                        {!loader && dataFiles.map((files, index) => (
                            <tr>
                                <td className='table-text'><FcFile className='margin-right-desktop' /> {files}</td>
                                <td>5 Feb 2020</td>
                                <td className='table-text'>Aaris Kazi <MdDeleteForever className="del text-danger" /></td>
                            </tr>
                        ))}
                    </tbody>



                </table>
            )}

            <NewFolderPopOver show={showPopup} onClose={handleClose} onSubmit={handleSubmit} superPath={currentPath} setShowPopup={setShowPopup} setError={setError} setdataFolder={setdataFolder} />
            {/* <NewFolderPopOver show={showPopup} onClose={handleClose} onSubmit={handleSubmit} /> */}

        </div>
    )
}

export default MyFiles
