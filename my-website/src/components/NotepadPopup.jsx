import React, { useState } from "react"

function NotepadPopup() {

    const [NotepadPopup, setNotepadPopup] = useState(false);

    const toggleNotepadPopup = () => {
        setNotepadPopup(!NotepadPopup)
    }

    return(
        <>
        <button onClick={toggleNotepadPopup} className='square-button' id="notepad"></button>
        <div className='icon-text'>
        <p>Notepad</p>
        </div>
        
        {NotepadPopup && (
        <section className ='popup' id="NotepadPopup">
            <header className ="header">
                <button onClick={toggleNotepadPopup} className ="close-button"> X </button>
            </header>
            <p>this is a popup</p>
        </section>)}

        </>
       
    )
}

export default NotepadPopup