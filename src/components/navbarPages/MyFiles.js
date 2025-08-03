import { useEffect, useState } from "react";
import Loader from "../Loader";
import { FcFile, FcFolder } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";
import { createDelete, createPost, fetchParams } from "../../utils/webclient";
import NewFolderPopOver from "../NewFolderPopOver";
import config from "../../utils/config";

const MyFiles = ({ setShowPopup, showPopup, handleClose }) => {
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");
    const [dataDirectory, setdataDirectory] = useState({});
    const [dataFiles, setdataFiles] = useState([]);
    const [dataFolder, setdataFolder] = useState([]);

    const removeFolder = async (folderName) => {

        setdataFolder(prev => prev.filter(name => name !== folderName));

        const access_token = localStorage.getItem(config.CLOUD_DRIVE_ACCESS_TOKEN);

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        };

        const payload = {
            "directory": folderName
        }

        try {
            const res = await createDelete("/api/v1/directory/", payload, headers);
            if (res.status === config.OK_STATUS) {
                setError("");
            } else {
                setError(res.message);
            }
        } catch (error) {
            setError(error);
        }
    };

    const handleSubmit = async (value) => {
        setShowPopup(false);

        const access_token = localStorage.getItem(config.CLOUD_DRIVE_ACCESS_TOKEN);

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        };

        const payload = {
            "directory": value
        }

        try {
            const res = await createPost("/api/v1/directory/", payload, headers);
            if (res.status === config.OK_STATUS) {
                setError("");
                setdataFolder(prev => [...prev, value]);
            } else {
                setError(res.message);
            }
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        const getFiles = async () => {
            const access_token = localStorage.getItem(config.CLOUD_DRIVE_ACCESS_TOKEN);

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            };
            setLoader(true);
            try {
                const res = await fetchParams("/api/v1/directory/", headers);
                if (res.status === config.OK_STATUS) {
                    const dirs = res.data.direcotries;
                    setdataDirectory(dirs)

                    if (dirs.file) {
                        setdataFiles(dirs.file);
                    } else {
                        setdataFiles([]);
                    }

                    if (dirs.folder) {
                        setdataFolder(dirs.folder);
                    } else {
                        setdataFolder([]);
                    }
                    setError("");
                } else {
                    setError(res.message);
                }
            } catch (error) {
                setError(error);
            }
            setLoader(false);
        };

        getFiles();
    }, []);

    return (
        <div className="row">
            <span className='h4 button-title'>Files</span>
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
                                    <td className='table-text'><FcFolder className='margin-right-desktop' /> {folder}</td>
                                    <td>5 Feb 2020</td>
                                    <td>Aaris Kazi <MdDeleteForever className="del text-danger" onClick={() => removeFolder(folder)} /></td>
                                </tr>
                            ))
                        }

                        {!loader && dataFiles.map((files, index) => (
                            <tr>
                                <td className='table-text'><FcFile className='margin-right-desktop' /> {files}</td>
                                <td>5 Feb 2020</td>
                                <td>Aaris Kazi <MdDeleteForever className="del text-danger" /></td>
                            </tr>
                        ))}
                    </tbody>



                </table>
            )}

            <NewFolderPopOver show={showPopup} onClose={handleClose} onSubmit={handleSubmit} />

        </div>
    )
}

export default MyFiles
