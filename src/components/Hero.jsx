import { ArrowDown, ArrowUpRight, Github, Mail, Sparkles } from 'lucide-react'
import Robot3D from './Robot3D'

export default function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-copy">
      <div className="availability"><span className="status-dot"/> OPEN TO LEARNING & OPPORTUNITIES</div>
      <p className="hero-welcome">Welcome to my Portfolio</p>
      <h1>Hi, I'm <span>Arjun K Lapoji</span></h1>
      <h2>Developing Full-Stack Developer</h2>
      <p className="hero-description">A 3rd-year B.Tech student in Computer Science & Engineering (Data Science), passionate about building, learning and bringing ideas to life through code.</p>
      <div className="hero-buttons">
        <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
        <a className="button secondary" href="#contact">Get in touch <Mail size={17}/></a>
      </div>
      <div className="hero-social"><a href="https://github.com/deadsoul14" target="_blank" rel="noreferrer"><Github size={18}/> github.com/deadsoul14</a><span className="social-divider"/><span>Bengaluru, India</span></div>
    </div>
    <div className="hero-visual">
      <div className="visual-glow"/><div className="visual-ring ring-one"/><div className="visual-ring ring-two"/>
      <div className="robot-label"><Sparkles size={15}/> YOUR FRIENDLY CODE COMPANION</div>
      <Robot3D/>
      <div className="floating-chip chip-top">✦ &nbsp; Building ideas</div>
      <div className="floating-chip chip-bottom">Hello, visitor <span>✦</span></div>
    </div>
    <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={16}/></a>
  </section>
}