import React, { useState } from "react";
import { Link } from "react-router-dom";
import googledrive from "../assets/googledrive.svg";
import { useNavigate } from "react-router-dom";
import "./css/LoginPage.css";
import { create } from "../utils/webclient";
import ErrorComponent from "../components/ErrorComponent";
import Loader from "../components/Loader";
import HomeRedirect from "../components/redirects/HomeRedirect";

const RegisterPage = () => {
    HomeRedirect();
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loader, setLoader] = useState(false);

    const navigate = useNavigate();

    const submittingForm = async (e) => {
        /*
            Controller method to control route
            */
        e.preventDefault();
        setLoader(true);
        try {
            const res = await create("/auth/register/", {
                username: username,
                first_name: firstname,
                last_name: lastname,
                email: email,
                password: password
            });

            if (res.status === 200) {
                navigate("/login", { state: { email } });
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
                                        <span className="h4">Create account</span>
                                    </div>
                                </div>
                                <div className="row">
                                    {error !== "" && (

                                        <ErrorComponent message={"User already exist"} />
                                    )}

                                    <form onSubmit={submittingForm}>
                                        <input
                                            className="form-control login-form"
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder="username"
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <input
                                            className="form-control login-form"
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            placeholder="first name"
                                            onChange={(e) => setFirstname(e.target.value)}
                                        />
                                        <input
                                            className="form-control login-form"
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            placeholder="last name"
                                            onChange={(e) => setLastname(e.target.value)}
                                        />
                                        <input
                                            className="form-control login-form"
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="someone@example.com"
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

export default RegisterPage;
