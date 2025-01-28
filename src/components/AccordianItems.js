import React, { useEffect, useState } from 'react'

function AccordianItems({ ids, title, body, links, setLink }) {
    const ids1 = "#" + ids;
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

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
            <div className='accordion-item'>
                <h2 className='accordion-header'>
                    <button className='accordion-button collapsed' type="button" data-bs-toggle="collapse" data-bs-target={ids1} aria-expanded="true" aria-controls={ids}>
                        {title}
                    </button>
                </h2>
                <div className='accordion-collapse collapse' id={ids}>
                    <div className='accordion-body'>
                        {body}
                        <div className='row justify-content-center'>
                            <img src={links} alt='banner-images' />
                        </div>
                    </div>
                </div>
    
            </div>
    
        )
        
    } else {
        
        return (
            <div className='accordion-item'>
                <h2 className='accordion-header'>
                    <button className='accordion-button collapsed' type="button" data-bs-toggle="collapse" data-bs-target={ids1} aria-expanded="true" aria-controls={ids} onClick={() => setLink(links)} >
                        {title}
                    </button>
                </h2>
                <div className='accordion-collapse collapse' id={ids}>
                    <div className='accordion-body'>
                        {body}
                    </div>
                </div>
    
            </div>
    
        )
    }


}

export default AccordianItems
