import React from 'react'
import Home from '../home/pages/Home'
import About from '../about/pages/About'
import Experience from '../experience/pages/Experience'
import Service from '../service/pages/Service'
import Portfolio from '../portfolio/pages/Portfolio'
import Contact from '../contact/pages/Contact'
import Skills from '../skills/pages/skills'
import Footer from '../footer/Footer'

function Pages() {
  return (
    <div className='h-fit'>
      <Home />
      <About />
      <Experience />
      <Service />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default Pages