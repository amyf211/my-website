import './index.css'

import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About /> } />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

