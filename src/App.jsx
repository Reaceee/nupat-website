import React from 'react'
// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../src/App.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App