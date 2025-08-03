import React from 'react'
import MyFiles from './navbarPages/MyFiles'
import Photos from './navbarPages/Photos'
import Audio from './navbarPages/Audio'
import Home from './navbarPages/Home'

function RenderPanel({ activePanel }) {
    /**
     * This class is to control the flow
     * which panel to pop over
     */
    
    switch (activePanel) {
        case "files":
            return (
                <MyFiles />
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
