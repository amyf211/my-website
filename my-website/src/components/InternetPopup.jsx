import React, { useState } from "react"

function InternetPopup() {

    const [InternetPopup, setInternetPopup] = useState(false);

    const toggleInternetPopup = () => {
        setInternetPopup(!InternetPopup)
    }

    return(
        <>
        <button onClick={toggleInternetPopup} className='square-button' id="internet"></button>
        <div className='icon-text'>
        <p>Internet</p>
        </div>
        
        {InternetPopup && (
        <section className ='popup' id="InternetPopup">
            <header className ="header">
                <button onClick={toggleInternetPopup} className ="close-button"> X </button>
            </header>
            <p>this is a popup</p>
        </section>)}

        </>
       
    )
}

export default InternetPopup