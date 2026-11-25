import { motion } from 'framer-motion'
import { Gamepad2, Music2, Trophy } from 'lucide-react'

const items = [
  { title:'Gaming', text:'Exploring new worlds, challenges and experiences through games.', Icon:Gamepad2 },
  { title:'Music', text:'Finding inspiration, energy and creativity through music.', Icon:Music2 },
  { title:'Cricket', text:'Enjoying the strategy, teamwork and excitement of the game.', Icon:Trophy },
]

export default function Passion() {
  return <section className="section-shell content-section" id="passion">
    <div className="section-heading"><span className="eyebrow">04 / PASSION</span><h2>Beyond the screen</h2><p>A few things I enjoy when I'm away from the keyboard.</p></div>
    <div className="passion-grid">{items.map((item,i)=><motion.div className="passion-card glass-card" key={item.title} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}>
      <div className="passion-icon"><item.Icon size={25}/></div><span className="passion-number">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p>
    </motion.div>)}</div>
  </section>
}