import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import BootScreen from './components/BootScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Passion from './components/Passion'
import Contact from './components/Contact'

export default function App() {
  const [light, setLight] = useState(false)
  const [showBoot, setShowBoot] = useState(true)
  const finishBoot = useCallback(() => setShowBoot(false), [])

  return <div className={light ? 'app light' : 'app'}>
    <AnimatePresence>{showBoot && <BootScreen onComplete={finishBoot}/>}</AnimatePresence>
    <Navbar light={light} setLight={setLight}/>
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Passion/>
      <Contact/>
    </main>
    <footer className="footer section-shell">
      <a className="brand" href="#home">AKL<span>.</span></a>
      <p>Designed & built by Arjun K Lapoji</p>
      <span>© {new Date().getFullYear()} · All rights reserved</span>
    </footer>
  </div>
}