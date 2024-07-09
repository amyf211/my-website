import './index.css'

import Home from "./components/Home"
import Footer from "./components/Footer"
import FolderPopup from './components/FolderPopup'
import AudioPopup from './components/AudioPopup'
import InternetPopup from './components/InternetPopup'
import NotepadPopup from './components/NotepadPopup'

function App() {

  return (
    <>
      <section class='flex-container'>
        <FolderPopup/>
        <NotepadPopup/>
        <AudioPopup/>
        <InternetPopup/>
      </section>
      <Footer/>
    </>
  )
}

export default App

