import { useState } from 'react'
import {Navbar} from './components/Navbar'
import {Header} from './components/Header'
import './static/css/App.css'
import { Cuerpo } from './components/Cuerpo'
function App() {
  return (
    <div className='container-universal'>
      <Navbar></Navbar>
      <Header></Header>
      <Cuerpo></Cuerpo>
    </div>
  )
}

export default App
