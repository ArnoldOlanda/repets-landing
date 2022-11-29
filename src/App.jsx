import { useState } from 'react'
import "./App.css";
import { Home } from './components/Home'
import { Features } from './components/Features'
import { Topbar } from './components/Topbar'

function App() {
  return (
    // style={{background:"linear-gradient(311.76deg, #D0E5FF -12.2%, #D9EAFE 0.54%, #E4F0FE 2.5%, #FFFFFF 81.89%)"}}
    <div className="App" style={{width:"100hv",}}>
      
      <Home/>
      <Features/>
      
    </div>
  )
}

export default App
