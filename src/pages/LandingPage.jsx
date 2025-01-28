import React from 'react';
import Footer from '../components/Footer';
import Headers from '../components/Headers';
import './css/landing.css'

import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import AccordianItems from '../components/AccordianItems';
import { useEffect, useState } from 'react'



function LandingPage() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
    const [imageList] = useState(['https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/305616-accordion-01-800x513?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=642&qlt=100&fmt=png-alpha&fit=constrain', 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/305616-accordion-02-800X513?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=642&qlt=100&fmt=png-alpha&fit=constrain', 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/305616-accordion-03-800X513?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=642&qlt=100&fmt=png-alpha&fit=constrain']);
    const [imageLinks, setImageLinks] = useState(imageList[0]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
          };
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    });

    
    
    if (isSmallScreen) {
        return (
            <div>
                <Headers />
                <div className='container'>
                    <div className="row banner">
    
                    </div>
                    <div className="row signin">
                        <div className="col landing">
                            <div className='card landing'>
                                <div className="card-body">
                                    <div className="card-title"><span className="h1">IZAK Cloud Drive</span></div>
                                    <div className="card-text"><p>Keep your files, photos, and videos automatically backed up and available on all your devices.</p></div>
                                    <div className="row">
                                        <div className="col-3 banner-buttons-holder"><Link to={'/login'} className='btn btn-dark banner-button'>Sign in</Link></div>
                                        <div className="col banner-buttons-holder"><Link to={'/register'} className='btn btn-light banner-button'>Create a free account</Link></div>
                                    </div>
                                    <Link to={'#'}>
    
                                        <div className="row">
                                            <div className="col-1 banner-buttons-holder bottom-banner"><button type="button" className='btn btn-dark'><FaAngleRight /></button></div>
                                            <div className="col-6 bottom-banner"><span>See plans and pricing</span></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row padding-top-bottom-landing">
                        <div className="col">
                            <div className="row">
                                <div className='blockquote'>Overview</div>
                                <h2>Securely save and share what's important</h2>
                            </div>
                            <div className="row">
                                    <div className='accordion banner' id="accordionPanels">
                                        <AccordianItems 
                                            ids={'panelsStayOpen-collapseOne'} 
                                            title={'For your desktop'} 
                                            body={"Back up your important files, photos, apps, and settings so they're available no matter what happens to your device."} 
                                            links ={imageList[0]}
                                            func = {''}
                                            />
                                        <AccordianItems 
                                            ids={'panelsStayOpen-collapseTwo'} 
                                            title={'For your Phone'} 
                                            body={"Automatically back up the photos and videos on your phone to save space and make them available on your desktop."} 
                                            links ={imageList[1]}
                                            />
                                        <AccordianItems 
                                            ids={'panelsStayOpen-collapseThree'} 
                                            title={'For your Xbox'} 
                                            body={"Back up Xbox game captures to keep your best moments protected, shareable, and accessible across all your devices."} 
                                            links ={imageList[2]}
                                            />
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row padding-top-bottom-landing"></div>
                    <div className="row padding-top-bottom-landing"></div>
                </div>
                <Footer />
            </div>
        )
        
    } else {
        
        return (
            <div>
                <Headers />
                <div className='container'>
                    <div className="row banner">
    
                    </div>
                    <div className="row signin">
                        <div className="col landing">
                            <div className='card landing'>
                                <div className="card-body">
                                    <div className="card-title"><span className="h1">IZAK Cloud Drive</span></div>
                                    <div className="card-text"><p>Keep your files, photos, and videos automatically backed up and available on all your devices.</p></div>
                                    <div className="row">
                                        <div className="col-3 banner-buttons-holder"><Link to={'/login'} className='btn btn-dark banner-button'>Sign in</Link></div>
                                        <div className="col banner-buttons-holder"><Link to={'/register'} className='btn btn-light banner-button'>Create a free account</Link></div>
                                    </div>
                                    <Link to={'#'}>
    
                                        <div className="row">
                                            <div className="col-1 banner-buttons-holder bottom-banner"><button type="button" className='btn btn-dark'><FaAngleRight /></button></div>
                                            <div className="col-6 bottom-banner"><span>See plans and pricing</span></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row padding-top-bottom-landing">
                        <div className="col">
                            <div className="row">
                                <div className='blockquote'>Overview</div>
                                <h2>Securely save and share what's important</h2>
                            </div>
                            <div className="row">
                                <div className='col accordians'>
                                    <div className='accordion banner' id="accordionPanels">
                                        <AccordianItems 
                                            ids={'panelsStayOpen-collapseOne'} 
                                            title={'For your desktop'} 
                                            body={"Back up your important files, photos, apps, and settings so they're available no matter what happens to your device."} 
                                            links ={imageList[0]}
                                            setLink={setImageLinks}
                                            />
                                        <AccordianItems 
                                            ids={'panelsStayOpen-collapseTwo'} 
                                            title={'For your Phone'} 
                                            body={"Automatically back up the photos and videos on your phone to save space and make them available on your desktop."} 
                                            links ={imageList[1]}
                                            setLink={setImageLinks}
                                            />
                                        <AccordianItems 
                                            ids={'panelsStayOpen-collapseThree'} 
                                            title={'For your Xbox'} 
                                            body={"Back up Xbox game captures to keep your best moments protected, shareable, and accessible across all your devices."} 
                                            links ={imageList[2]}
                                            setLink={setImageLinks}
                                            />
                                    </div>
                                </div>
                                <div className='col'>
                                    <img className='img-fluid' src={imageLinks} alt="banner" srcSet="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row padding-top-bottom-landing"></div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default LandingPage;
