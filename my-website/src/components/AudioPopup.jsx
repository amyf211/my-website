import React, { useState } from "react"

function AudioPopup() {

    const [AudioPopup, setAudioPopup] = useState(false);

    const toggleAudioPopup = () => {
        setAudioPopup(!AudioPopup)
    }

    return(
        <>
        <button onClick={toggleAudioPopup} className='square-button' id="audio"></button>
        <div className='icon-text'>
        <p>Audio</p>
        </div>
        
        
        {AudioPopup && (
        <section className ='popup' id="AudioPopup">
            <header className ="header">
                <button onClick={toggleAudioPopup} className ="close-button"> X </button>
            </header>
            <p>this is a popup</p>
        </section>)}
        </>
       
    )
}

export default AudioPopup