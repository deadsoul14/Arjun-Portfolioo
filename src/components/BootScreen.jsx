import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function BootScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const started = Date.now()
    const timer = setInterval(() => {
      const value = Math.min(100, Math.round((Date.now() - started) / 18))
      setProgress(value)
      if (value >= 100) {
        clearInterval(timer)
        setTimeout(onComplete, 250)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div className="boot-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5 }}>
      <div className="boot-content">
        <div className="boot-mark">AKL<span>.</span></div>
        <p className="eyebrow">PERSONAL PORTFOLIO</p>
        <h1>Preparing your experience<span className="blink">_</span></h1>
        <div className="boot-track"><motion.div className="boot-fill" animate={{ width: `${progress}%` }} /></div>
        <div className="boot-meta"><span>LOADING PORTFOLIO</span><strong>{progress}%</strong></div>
      </div>
    </motion.div>
  )
}