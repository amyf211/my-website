import './index.css'
import Footer from "./components/Footer"
import FolderPopup from './components/FolderPopup'
import AudioPopup from './components/AudioPopup'
import InternetPopup from './components/InternetPopup'
import NotepadPopup from './components/NotepadPopup'
import DeskBuddy from './components/DeskBuddy'

function App() {

  return (
    <>
      <section class='flex-container'>
        <FolderPopup/>
        <NotepadPopup/>
        <AudioPopup/>
        <InternetPopup/>
      </section>
      <DeskBuddy/>
      <Footer/>
    </>
  )
}

export default App

