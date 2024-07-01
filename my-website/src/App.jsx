import './index.css'

import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import About from "./components/About"
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About /> } />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App

