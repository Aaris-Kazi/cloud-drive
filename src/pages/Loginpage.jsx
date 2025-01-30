import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import googledrive from '../assets/googledrive.svg'
import './css/LoginPage.css'


const Loginpage = () => {
    const location = useLocation();
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    return (
        <div className="container loginPage">
            <div className="row">
                <div className="col">
                    <div className="container login">
                        <div className="row">
                            <div className="col login">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="container-fluid navbar">
                                        <Link to={'/'} className='navbar-brand'>
                                            <img src={googledrive} alt="Bootstrap" width="30" height="24" />
                                            Cloud Drive
                                        </Link>
                                    </div>
                                </nav>
                                <div className="row">
                                    <div className="row"><span className="h4">Sign in</span></div>
                                </div>
                                <div className="row">
                                    <div className='alert alert-danger' role='alert'>
                                        Invalid username or password
                                        <button type="button" className='margin-left btn-close'  data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <form action="" method="post">
                                        <input className='form-control login-form' type="email" name="email" id="email" placeholder='someone@example.com' value={email} onChange={(e)=> setEmail(e.target.email)} />
                                        <input className='form-control login-form' type="password" name="password" id="password" placeholder='password' />
                                        <div className='secondary-content'>
                                            No account? <Link to={'/register'}>Create one!</Link>
                                        </div>
                                        <button type="submit" className='btn btn-primary login-form'>Next</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginpage
