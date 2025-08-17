import React from 'react'
import MyFiles from './navbarPages/MyFiles'
import Photos from './navbarPages/Photos'
import Audio from './navbarPages/Audio'
import Home from './navbarPages/Home'

function RenderPanel({ activePanel, showPopup, setShowPopup, handleClose, inputFileShowPopup,  setInputFileShowPopup, handleCloseFile }) {
    /**
     * This class is to control the flow
     * which panel to pop over
     */
    
    switch (activePanel) {
        case "files":
            return (
                <MyFiles setShowPopup={setShowPopup} showPopup={showPopup} handleClose={handleClose} inputFileShowPopup={inputFileShowPopup} setInputFileShowPopup={setInputFileShowPopup} handleCloseFile={handleCloseFile} />
            )

        case "home":
            return (
                <Home />
            )
    
        case "photos":
            return (
                <Photos />
            )
    
        case "audios":
            return (
                <Audio />
            )
    
        default:
            return (
                <Home />
            )
    }
}

export default RenderPanel
