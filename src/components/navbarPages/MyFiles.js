import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import { FcFile } from "react-icons/fc";
import { fetchParams } from "../../utils/webclient";

const MyFiles = () => {
    const [loader, setLoader] = useState(false);
    const [dataDirectory, setdataDirectory] = useState([]);

    const access_token = localStorage.getItem("cloud_drive_access_token");

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
    };
    useEffect(() => {
        const getFiles = async () => {
            setLoader(true);
            try {
                const res = await fetchParams("/api/v1/directory/", headers);
                if (res.status === 200) {
                    setdataDirectory(res.data['direcotries'])
                    console.log(res.data['direcotries']);
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
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col-2'>Opened</th>
                        <th scope='col-1'>Owner</th>
                    </tr>
                </thead>
                <tbody>
                    {loader && (
                        <div className="row loader">
                            <Loader />
                        </div>
                    )}
                    {!loader && dataDirectory.map((file, index) => (
                        <tr>
                            <td className='table-text'><FcFile className='margin-right-desktop' /> {file}</td>
                            <td>5 Feb 2020</td>
                            <td>Aaris Kazi</td>
                        </tr>
                    ))}

                    {!loader && dataDirectory.length === 0 && (
                        <tr><td colSpan="3">No files found.</td></tr>
                    )}


                </tbody>

            </table>
        </div>
    )
}

export default MyFiles
