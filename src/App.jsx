// import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Add from './components/add/Add'
import { Route, Routes } from 'react-router-dom'
import './App.css'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  )
}

export default App
