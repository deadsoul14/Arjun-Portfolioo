import { motion } from 'framer-motion'

const projects = [
  { number:'01', name:'Number Guessing Game', type:'Interactive Game', description:'A fun number guessing experience built to explore programming logic and interactive gameplay.', tags:['JavaScript','Game Logic'], symbol:'猜' },
  { number:'02', name:'Personal Portfolio', type:'Web Development', description:'A personal space on the web to showcase my journey, skills, projects and interests.', tags:['React','CSS'], symbol:'✳' },
]

export default function Projects() {
  return <section className="section-shell content-section" id="projects">
    <div className="section-heading"><span className="eyebrow">03 / PROJECTS</span><h2>Things I've worked on</h2><p>A few projects from my learning and development journey.</p></div>
    <div className="projects-grid">{projects.map((project,i)=><motion.article className="project-card glass-card" key={project.number} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}>
      <div className="project-top"><span>{project.number} / PROJECT</span><span className="project-type">{project.type}</span></div>
      <div className="project-art"><div className={`project-orbit orbit-${i}`}/><div className="project-symbol">{project.symbol}</div></div>
      <h3>{project.name}</h3><p>{project.description}</p>
      <div className="project-bottom"><div className="skill-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><span className="project-note">Personal project</span></div>
    </motion.article>)}</div>
  </section>
}