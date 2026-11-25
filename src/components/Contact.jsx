import { ArrowUpRight, Github, Mail } from 'lucide-react'

export default function Contact() {
  return <section className="section-shell content-section contact-section" id="contact">
    <div className="section-heading"><span className="eyebrow">05 / CONTACT</span><h2>Let's connect</h2><p>Have an idea, opportunity or just want to say hello? My inbox is open.</p></div>
    <div className="contact-card glass-card">
      <div><span className="eyebrow">GET IN TOUCH</span><h3>Let's make something<br/><span>meaningful together.</span></h3><p>I'm always interested in learning, collaborating and connecting with people in tech.</p></div>
      <div className="contact-links">
        <a className="contact-link" href="mailto:arjunklapoji689@gmail.com"><Mail/><span><small>EMAIL ME</small>arjunklapoji689@gmail.com</span><ArrowUpRight/></a>
        <a className="contact-link" href="https://github.com/deadsoul14" target="_blank" rel="noreferrer"><Github/><span><small>GITHUB</small>github.com/deadsoul14</span><ArrowUpRight/></a>
      </div>
    </div>
  </section>
}