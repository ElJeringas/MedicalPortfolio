import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Header from './container/Header/Header'
import './App.css'
import Services from './container/Services/Services'
import Why from './container/Why/Why'
import AboutMe from './container/AboutMe/AboutMe'
import References from './container/References/References'
import Footer from './container/Footer/Footer'
const App = () => {
  return (
    <div>
      <div className='container'>
        <NavBar/>
        <Header/>
      </div>
      <Services/>
      <Why/>
      <AboutMe/>
      <References/>
      <Footer/>
    </div>
  )
}

export default App