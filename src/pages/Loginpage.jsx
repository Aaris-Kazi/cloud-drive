import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import googledrive from "../assets/googledrive.svg";
import { useNavigate } from "react-router-dom";
import "./css/LoginPage.css";
import { create } from "../utils/webclient";
import ErrorComponent from "../components/ErrorComponent";
import Loader from "../components/Loader";
import HomeRedirect from "../components/redirects/HomeRedirect";
import config from "../utils/config";

const Loginpage = () => {
    HomeRedirect();

    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loader, setLoader] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const submittingForm = async (e) => {
        /*
            Controller method to control route
        */
        e.preventDefault();
        setLoader(true);
        try {

            const res = await create("/auth/login/", {
                email: email,
                password: password
            });

            if (res.status === config.OK_STATUS) {
                localStorage.setItem(config.CLOUD_DRIVE_USERNAME, res.data.username);
                localStorage.setItem(config.CLOUD_DRIVE_EMAIL, email);
                localStorage.setItem(config.CLOUD_DRIVE_ACCESS_TOKEN, res.data.access_token);
                navigate("/home");
            } else {
                setError(res.data);
            }
        } catch (exception) {
            console.log(exception);
            setError(exception);
        }
        setLoader(false);
    };

    return (
        <div className="container loginPage">
            <div className="row">
                <div className="col">
                    <div className="container login">
                        <div className="row">
                            <div className="col login">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="container-fluid navbar">
                                        <Link to={"/"} className="navbar-brand">
                                            <img
                                                src={googledrive}
                                                alt="Bootstrap"
                                                width="30"
                                                height="24"
                                            />
                                            Cloud Drive
                                        </Link>
                                    </div>
                                </nav>
                                <div className="row">
                                    <div className="row">
                                        <span className="h4">Sign in</span>
                                    </div>
                                </div>
                                <div className="row">
                                    {error !== "" && (
                                        <ErrorComponent message={"Invalid username or password"} />
                                    )}

                                    <form onSubmit={submittingForm}>
                                        <input
                                            className="form-control login-form"
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="someone@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <input
                                            className="form-control login-form"
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <div className="secondary-content">
                                            No account? <Link to={"/register"}>Create one!</Link>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary login-form"
                                            disabled={loader}
                                        >
                                            Next
                                        </button>

                                        {loader && (
                                            <div className="row loader">
                                                <Loader />
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;
