import { useState } from 'react'
import {Navbar} from './components/Navbar'
import {Header} from './components/Header'
import './static/css/App.css'
function App() {
  return (
    <div className='container-universal'>
      <Navbar></Navbar>
      <Header></Header>
    </div>
  )
}

export default App
