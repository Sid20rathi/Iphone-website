import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import * as Sentry from '@sentry/react'
import Features from './components/Features'
import Footer from './components/Footer'
import HowItWorks from './components/Chip'


function App() {

  
  

  return (
    <main className ="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>

    </main>
   
  )
}

export default Sentry.withProfiler(App)
