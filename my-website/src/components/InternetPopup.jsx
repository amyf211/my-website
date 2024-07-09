import React, { useState } from "react"

function InternetPopup() {

    const [InternetPopup, setInternetPopup] = useState(false);

    const toggleInternetPopup = () => {
        setInternetPopup(!InternetPopup)
    }

    return(
        <>
        <section class='flex-container'>
        <button onClick={toggleInternetPopup} className='square-button' id="internet"></button>
        <p>Internet</p>
        </section>
        
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