/** @format */
import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('./apartments.json')
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
