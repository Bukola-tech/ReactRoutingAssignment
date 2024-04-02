import { useState } from 'react'
import { BrowserRouter as BrowserRoute, Route, Routes } from 'react-router-dom'
import './App.css'
import Work from './assets/components/Work'
import Navigation from './assets/components/Navigation'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Contact from './assets/components/Contact'
import Projects from './assets/components/Project'
import Services from './assets/components/Service'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRoute>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/navbar' element={<Navigation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </BrowserRoute>
    
    </>
  )
}

export default App
