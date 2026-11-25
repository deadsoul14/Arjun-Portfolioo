import { motion } from 'framer-motion'

const groups = [
  { title: 'Programming', items: ['Python', 'JavaScript', 'Java'] },
  { title: 'Web Development', items: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'MongoDB'] },
  { title: 'Tools', items: ['GitHub'] },
]

export default function Skills() {
  return <section className="section-shell content-section" id="skills">
    <div className="section-heading"><span className="eyebrow">02 / SKILLS</span><h2>Tools of my trade</h2><p>Technologies I'm learning and using to bring ideas to life.</p></div>
    <div className="skills-grid">{groups.map((group,i) => <motion.div className="skill-card glass-card" key={group.title} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}>
      <span className="skill-index">0{i+1}</span><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item=><span key={item}>{item}</span>)}</div>
    </motion.div>)}</div>
  </section>
}