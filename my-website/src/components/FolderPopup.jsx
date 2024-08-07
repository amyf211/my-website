import React, { useState } from "react"

function FolderPopup() {

    const [folderPopup, setFolderPopup] = useState(false);

    const toggleFolderPopup = () => {
        setFolderPopup(!folderPopup)
    }

    return(
        <>
        <button onClick={toggleFolderPopup} className='square-button' id="folder"></button>
        <div className='icon-text'>
        <p>Folder</p>
        </div>
        
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