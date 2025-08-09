import config from './config';
import { fetchParams, createDelete, createPost } from './webclient';

export const getFiles = async (value, setLoader, setdataDirectory, setdataFiles, setdataFolder, setError) => {
    const access_token = localStorage.getItem(config.CLOUD_DRIVE_ACCESS_TOKEN);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
    };
    const params = {
        "directory": value
    };
    setLoader(true);
    try {
        const res = await fetchParams("/api/v1/directory/", headers, params);
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

export const removeFolder = async (superPath, folderName, setdataFolder, setError) => {
    // this method allows to delete folder

    setdataFolder(prev => prev.filter(name => name !== folderName));

    const access_token = localStorage.getItem(config.CLOUD_DRIVE_ACCESS_TOKEN);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
    };
    
    const payload = {
        "directory": superPath + folderName
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

export const handleSubmit = async (superPath, value, setShowPopup, setError, setdataFolder) => {
    // this method allows to createfolder
    
    setShowPopup(false);

    const access_token = localStorage.getItem(config.CLOUD_DRIVE_ACCESS_TOKEN);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
    };

    const payload = {
        "directory": superPath + value
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
