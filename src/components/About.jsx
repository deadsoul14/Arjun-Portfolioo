import { Code2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  return <section className="section-shell content-section" id="about">
    <div className="section-heading"><span className="eyebrow">01 / ABOUT</span><h2>A little about me</h2><p>Curious by nature. Developer in progress. Always learning.</p></div>
    <div className="about-grid">
      <motion.div className="about-card glass-card" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        <div className="about-icon"><Code2/></div><h3>Learning by building</h3>
        <p>I'm Arjun, a B.Tech student at Atria Institute of Technology, specializing in Computer Science & Engineering (Data Science). I enjoy exploring technology and turning ideas into practical projects.</p>
        <p>I'm currently growing my skills across programming and full-stack web development, one project at a time.</p>
      </motion.div>
      <div className="about-facts">
        <div className="fact-card"><span>EDUCATION</span><strong>B.Tech · CSE (DS)</strong><small>3rd Year · Pursuing</small></div>
        <div className="fact-card"><span>INSTITUTE</span><strong>Atria Institute of Technology</strong><small>Bengaluru, India</small></div>
        <div className="fact-card"><span>CURRENT FOCUS</span><strong>Full-Stack Development</strong><small>Learning · Building · Improving</small></div>
      </div>
    </div>
  </section>
}