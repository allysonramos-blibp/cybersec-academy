import { useState, useEffect } from 'react'
import styles from './AttackSimulation.module.css'

function AttackSimulation({ lines }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step < lines.length) {
      const timeout = setTimeout(() => {
        setStep(s => s + 1)
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [step, lines.length])

  return (
    <div className={styles.container}>
      {lines.slice(0, step).map((line, index) => (
        <pre key={index} className={styles[line.type]}>
          {line.text}
        </pre>
      ))}
      {step < lines.length && (
        <pre className={styles.cursor}>▋</pre>
      )}
    </div>
  )
}

export default AttackSimulation