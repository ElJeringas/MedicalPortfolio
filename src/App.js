import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Header from './container/Header/Header'
import './App.css'
const App = () => {
  return (
    <div>
    <div className='container'>
    <NavBar/>
      <Header/>
    </div>
    </div>
  )
}

export default App