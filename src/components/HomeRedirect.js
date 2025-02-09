import {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function HomeRedirect() {
    /**
     * This method allows you to check the token 
     * also to skip the login get back to home screen 
     */
    const username = localStorage.getItem("cloud_drive_username");
    const email = localStorage.getItem("cloud_drive_email");
    const access_token = localStorage.getItem("cloud_drive_access_token");
    const navigate = useNavigate();

    useEffect(() => {

        if (username !== "" && username !== null && email !== "" && email !== null && access_token !== "" && access_token !== null) {
            navigate("/home");
        }
    }, [username, email, access_token, navigate]);
    
}

export default HomeRedirect;