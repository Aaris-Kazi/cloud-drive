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
            setdataDirectory(dirs);

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
        setError(error.message);
    }
    setLoader(false);
};

export const removeFolder = async (superPath, folderName, setdataFolder, setError, setFolderPath1) => {
    // this method allows to delete folder

    if (superPath === undefined) {
        superPath = ""
    } else {
        superPath = superPath + "/"
    }

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
            setFolderPath1(superPath);
        } else {
            setError(res.message);
        }
    } catch (error) {
        setError(error.message);
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

    setdataFolder(prev => {const rep = [...prev, {"name": value}]
        return rep;
    });
    

    try {
        const res = await createPost("/api/v1/directory/", payload, headers);
        if (res.status === config.OK_STATUS) {
            setError("");
        } else {
            setError(res.message);
        }
    } catch (error) {
        setError(error.message);
    }
};

export const handleFileSubmit = async (superPath, filename, setShowPopup, setError, setdataFiles) => {

    setShowPopup(false);
    const access_token = localStorage.getItem(config.CLOUD_DRIVE_ACCESS_TOKEN);
    const form = new FormData();

    form.append("name",filename.name);
    form.append("file",filename);
    form.append("folder",superPath);

    console.log(filename.name);
    console.log(filename);
    console.log(superPath);
    
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + access_token
    };

    try {

        const res = await createPost("/api/v1/file/", form, headers);
        if (res.status === config.OK_STATUS) {
            setdataFiles(prev => [...prev,  {"name": filename.name}])
        } else {
            setError(res.message);
        }

    } catch (error) {
        setError(error.message);
    }
    

}
