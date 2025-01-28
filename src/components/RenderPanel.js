import React from 'react'
import MyFiles from './navbarPages/MyFiles'
import Photos from './navbarPages/Photos'
import Audio from './navbarPages/Audio'

function RenderPanel({ activePanel }) {

    switch (activePanel) {
        case "files":
            return (
                <MyFiles />
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
                <MyFiles />
            )
    }
}

export default RenderPanel
