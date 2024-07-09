import React, { useState } from "react"

function NotepadPopup() {

    const [NotepadPopup, setNotepadPopup] = useState(false);

    const toggleNotepadPopup = () => {
        setNotepadPopup(!NotepadPopup)
    }

    return(
        <>
        <section class='flex-container'>
        <button onClick={toggleNotepadPopup} className='square-button' id="notepad"></button>
        <p>Notepad</p>
        </section>
        
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