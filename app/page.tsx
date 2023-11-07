import React from 'react'
import LandigPage from './LandingPage/page'
import Skill from './Skill/page'
import Projects from './Projects/page'
import Contact from './Contact/page'
function Home() {
  return (
  <div>
    <LandigPage />
    <Skill/>
    <Contact/>
  </div>
  )
}

export default Home