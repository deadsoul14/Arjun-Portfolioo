import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Passion', '#passion'], ['Contact', '#contact']]

export default function Navbar({ light, setLight }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <a className="brand" href="#home">AKL<span>.</span></a>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <div className="nav-actions">
        <button className="theme-toggle" onClick={() => setLight(!light)} aria-label="Toggle theme">{light ? <Moon size={18}/> : <Sun size={18}/>}</button>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      </div>
    </header>
  )
}