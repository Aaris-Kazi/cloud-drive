import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import { FcFile, FcFolder } from "react-icons/fc";
import { fetchParams } from "../../utils/webclient";

const MyFiles = () => {
    const [loader, setLoader] = useState(false);
    const [dataDirectory, setdataDirectory] = useState({});
    const [dataFiles, setdataFiles] = useState([]);
    const [dataFolder, setdataFolder] = useState([]);

    useEffect(() => {
        const getFiles = async () => {
            const access_token = localStorage.getItem("cloud_drive_access_token");

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            };
            setLoader(true);
            try {
                const res = await fetchParams("/api/v1/directory/", headers);
                if (res.status === 200) {
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
                } else {
                    console.log(res.message);
                    console.log(res.status);
                }
            } catch (error) {
                console.log(error);
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
                                    <td>Aaris Kazi</td>
                                </tr>
                            ))
                        }

                        {!loader && dataFiles.map((files, index) => (
                            <tr>
                                <td className='table-text'><FcFile className='margin-right-desktop' /> {files}</td>
                                <td>5 Feb 2020</td>
                                <td>Aaris Kazi</td>
                            </tr>
                        ))}
                    </tbody>



                </table>
            )}

        </div>
    )
}

export default MyFiles
