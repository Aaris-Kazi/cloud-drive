import {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import config from '../../utils/config';

function LoginRedirect () {
    const username = localStorage.getItem(config.CLOUD_DRIVE_USERNAME);
    const email = localStorage.getItem(config.CLOUD_DRIVE_EMAIL);
    const access_token = localStorage.getItem(config.CLOUD_DRIVE_ACCESS_TOKEN);
    const navigate = useNavigate();

    useEffect(() => {

        if (username === "" || username === null || email === "" || email === null || access_token === "" || access_token === null) {
            navigate("/login");
        }
    }, [username, email, access_token, navigate]);
}

export default LoginRedirect