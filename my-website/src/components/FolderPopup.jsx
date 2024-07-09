import React, { useState } from "react"

function FolderPopup() {

    const [folderPopup, setFolderPopup] = useState(false);

    const toggleFolderPopup = () => {
        setFolderPopup(!folderPopup)
    }

    return(
        <>
        <section class='flex-container'>
        <button onClick={toggleFolderPopup} className='square-button' id="folder"></button>
        <p>folder</p>
        </section>
        
        {folderPopup && (
        <section className ='popup' id="folderPopup">
            <header className ="header">
                <button onClick={toggleFolderPopup} className ="close-button"> X </button>
            </header>
            <p>this is a popup</p>
        </section>)}

        </>
       
    )
}

export default FolderPopup