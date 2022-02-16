/** @format */
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import Error from './pages/Error'
import Footer from './components/footer/Footer'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/apartments.json')
      .then((res) => res.json())
      .then((res) => {setData(res)
      setIsLoading(false)
      })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing data={data} />} />
          <Route path="/*" element={<Error />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
