import React, { useState } from 'react'
import "./css/HomePage.css"
import HomeNavBar from '../components/HomeNavBar';
import HomeNavStickBar from '../components/HomeNavStickBar';
import RenderPanel from '../components/RenderPanel';
import LoginRedirect from '../components/redirects/LoginRedirect';

const HomePage = () => {
    LoginRedirect();
    const [activePanel, setActivePanel] = useState('home');

    return (
        <div className="homepage">
            <HomeNavStickBar />
            <div className="row">
                <div className="col-2">
                    <HomeNavBar setActivePanel={setActivePanel} />
                </div>
                <div className="col content">
                    <div className="row justify-content-end searchRow">
                        <input className="form-control file" type="search" placeholder="Search everything" aria-label="Search" />
                    </div>
                    <RenderPanel activePanel={activePanel} />
                </div>
            </div>

        </div>
    )
}

export default HomePage
