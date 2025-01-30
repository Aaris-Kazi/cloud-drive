import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import googledrive from '../assets/googledrive.svg'
import { useNavigate } from 'react-router-dom';
import './css/LoginPage.css'



const RegisterPage = () => {

    const [email, setEmail] = useState("");
    
    const navigate = useNavigate();
    function submittingForm() {
        navigate('/login', {state: {email}});
    }
    
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
                                    <div className="row"><span className="h4">Create account</span></div>
                                </div>
                                <div className="row">
                                <div className='alert alert-danger' role='alert'>
                                        User already exist
                                        <button type="button" className='margin-left btn-close'  data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <form onSubmit={submittingForm}>
                                        <input className='form-control login-form' type="text" name="username" id="username" placeholder='username' />
                                        <input className='form-control login-form' type="email" name="email" id="email" placeholder='someone@example.com' onChange={(e) => setEmail(e.target.value)} />
                                        <input className='form-control login-form' type="password" name="password" id="password" placeholder='password' />
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

export default RegisterPage
