import React from 'react'
import { Navbar } from './components'
import { Home, Info, About, Events, Footer} from './container'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Info />
      <Events />
      <About />
      <Footer />
    </div>
  )
}

export default App