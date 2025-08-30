import { useEffect, useState } from "react";
import Loader from "../Loader";
import { FcFolder } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import NewFolderPopOver from "../NewFolderPopOver";
import "../../pages/css/Home.css";
import BreadCrumbs from "../BreadCrumbs";
import { getFiles, removeFolder, handleSubmit, handleFileSubmit, removeFile } from "../../utils/FolderOperations";
import NewFilePopOver from "../NewFilePopOver";
import config from "../../utils/config";
import { FileCheck } from "../FileCheck";

const MyFiles = ({ setShowPopup, showPopup, handleClose, inputFileShowPopup, setInputFileShowPopup, handleCloseFile }) => {
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");
    const [currentPath, setCurrentPath] = useState([]);
    const [dataDirectory, setdataDirectory] = useState({});
    const [dataFiles, setdataFiles] = useState([]);
    const [dataFolder, setdataFolder] = useState([]);
    const username = localStorage.getItem("cloud_drive_username");
    let previewPath = currentPath[currentPath.length - 1];

    if (previewPath === undefined) {
        previewPath = ""
    } else {
        previewPath = "/" + previewPath
    }
    const setFolderPath = async (path) => {

        // console.log(path);
        let supPath = currentPath[currentPath.length - 1];
        // console.log(supPath);



        if (supPath === undefined) {
            supPath = path
        } else {
            supPath = supPath + "/" + path
        }
        setCurrentPath(prev => {
            // console.log(prev);
            let up;

            if (prev.length === 0) {

                up = [...prev, path]
            } else {

                up = [...prev, supPath]
            }

            // console.log(up);

            return up

        });
        await getFiles(supPath, setLoader, setdataDirectory, setdataFiles, setdataFolder, setError);


    }

    const setFolderPath1 = async (path) => {
        await getFiles(path, setLoader, setdataDirectory, setdataFiles, setdataFolder, setError);
    }

    useEffect(() => {
        getFiles("", setLoader, setdataDirectory, setdataFiles, setdataFolder, setError);
    }, []);

    const FilePreview = async (fileUrl) => {
        window.open(config.BASE_URL + "/media/storage/" + username + previewPath + "/" + fileUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="row">
            <span className='h4 button-title'><BreadCrumbs setCurrentPath={setCurrentPath} path={currentPath} setFolderPath1={setFolderPath1} /></span>
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
                        {dataFolder.length === 0 && dataFiles.length === 0 && (
                            <tr><td colSpan="3">No files found.</td></tr>
                        )}

                        {!loader && dataFolder.map(
                            (folder, index) => (
                                <tr key={`${folder.name}-${index}`}>
                                    <td className='table-text' onDoubleClick={() => setFolderPath(folder.name)}><FcFolder className='margin-right-desktop' /> {folder.name}</td>
                                    <td>5 Feb 2020</td>
                                    <td className='table-text'>Aaris Kazi <MdDeleteForever className="del text-danger" onClick={() => removeFolder(currentPath[currentPath.length - 1], folder.name, setdataFolder, setError, setFolderPath1)} /></td>
                                </tr>
                            ))
                        }

                        {!loader && dataFiles.map((files, index) => (
                            <tr key={`${files.name}-${index}`} >
                                <td className='table-text' onDoubleClick={() => FilePreview(files.name)}>{FileCheck(files.name)} {files.name}</td>
                                <td>5 Feb 2020</td>
                                <td className='table-text'>Aaris Kazi <MdDeleteForever className="del text-danger" onClick={() => removeFile(currentPath[currentPath.length - 1], files.name, setdataFiles, setError, setFolderPath1)} /></td>
                            </tr>
                        ))}
                    </tbody>



                </table>
            )}

            <NewFolderPopOver show={showPopup} onClose={handleClose} onSubmit={handleSubmit} superPath={currentPath[currentPath.length - 1]} setShowPopup={setShowPopup} setError={setError} setdataFolder={setdataFolder} />
            <NewFilePopOver show={inputFileShowPopup} onClose={handleCloseFile} onSubmit={handleFileSubmit} superPath={currentPath[currentPath.length - 1]} setShowPopup={setInputFileShowPopup} setError={setError} setdataFiles={setdataFiles} />

        </div>
    )
}

export default MyFiles
