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
                                    <form onSubmit={submittingForm}>
                                        <input className='form-control login-form' type="text" name="" id="" placeholder='username' />
                                        <input className='form-control login-form' type="email" name="" id="" placeholder='someone@example.com' onChange={(e) => setEmail(e.target.value)} />
                                        <input className='form-control login-form' type="password" name="" id="" placeholder='password' />
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
