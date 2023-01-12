import './static/css/App.css'
import { useState } from 'react'
import {Navbar} from './components/Navbar'
import {Header} from './components/Header'
import { Cuerpo } from './components/Cuerpo'
import { Facultades } from './pages/Facultades'
import {CalixtoCuerpo} from './pages/CalixtoCuerpo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FajardoCuerpo } from './pages/FajardoCuerpo'
import { AllendeCuerpo } from './pages/AllendeCuerpo'
function App() {
  return (
    <div className='container-universal'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Cuerpo></Cuerpo>}></Route>
          <Route path='/facultades' element={<Facultades></Facultades>}></Route>
          <Route path='/facultades/calixto' element={<CalixtoCuerpo></CalixtoCuerpo>}></Route>
          <Route path='/facultades/fajardo' element={<FajardoCuerpo></FajardoCuerpo>}></Route>
          <Route path='/facultades/allende' element={<AllendeCuerpo></AllendeCuerpo>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
