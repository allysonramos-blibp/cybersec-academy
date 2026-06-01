import { useState, useRef, useEffect } from 'react'
import attacks from '../../data/attacks.js'
import commands from '../../data/commands.js'
import AttackCard from '../../components/AttackCard/AttackCard'
import styles from './Terminal.module.css'

function Terminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'system', text: 'Bem-vindo ao CyberSec Terminal v1.0' },
    { type: 'system', text: 'Digite "help" para ver os comandos disponíveis.' }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  function processCommand(cmd) {
    const trimmed = cmd.trim().toLowerCase()
    const parts = trimmed.split(' ')
    const main = parts[0]
    const arg = parts[1]

    if (main === 'clear') {
      setHistory([])
      return null
    }

    if (main === 'scan') {
      if (!arg) {
        return {
          type: 'error',
          text: 'Uso correto: scan [nome-do-ataque]. Ex: scan phishing'
        }
      }
      const attack = attacks.find(a => a.id === arg)
      if (!attack) {
        return {
          type: 'error',
          text: `Ataque "${arg}" não encontrado. Digite "attacks" para ver a lista.`
        }
      }
      
      return { type: 'attack', data: attack }
    }

    if (commands[main]) {
      return { type: 'output', text: commands[main].response }
    }

    return {
      type: 'error',
      text: `Comando "${trimmed}" não reconhecido. Digite "help" para ajuda.`
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userInput = input
    setInput('')

    setHistory(prev => [...prev, { type: 'input', text: userInput }])

    if (userInput.trim().toLowerCase() === 'clear') {
      setHistory([])
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      const response = processCommand(userInput)
      if (response) {
        setHistory(prev => [...prev, response])
      }
      setIsLoading(false)
    }, 500)
  }

  function renderLine(line, index) {
    
    if (line.type === 'attack') {
      return (
        <div key={index} className={styles.attackWrapper}>
          <AttackCard attack={line.data} onClick={() => {}} />
        </div>
      )
    }

    if (line.type === 'input') {
      return (
        <div key={index} className={styles.inputLine}>
          <span className={styles.prompt}>$ </span>
          <pre>{line.text}</pre>
        </div>
      )
    }

    if (line.type === 'error') {
      return (
        <div key={index} className={styles.errorLine}>
          <pre>{line.text}</pre>
        </div>
      )
    }

    if (line.type === 'output') {
      return (
        <div key={index} className={styles.outputLine}>
          <pre>{line.text}</pre>
        </div>
      )
    }

  
    return (
      <div key={index} className={styles.systemLine}>
        <pre>{line.text}</pre>
      </div>
    )
  }

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Terminal Interativo</h1>
      <p className={styles.subtitle}>Explore ameaças cibernéticas como um hacker ético</p>

      <div className={styles.terminal}>
        <div className={styles.titleBar}>
          <span className={styles.dot} style={{ background: '#ff5f57' }} />
          <span className={styles.dot} style={{ background: '#febc2e' }} />
          <span className={styles.dot} style={{ background: '#28c840' }} />
          <span className={styles.terminalTitle}>cybersec@academy ~ </span>
        </div>

        <div className={styles.output}>
          {history.map((line, index) => renderLine(line, index))}

          {isLoading && (
            <div className={styles.systemLine}>
              <pre>processando...</pre>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <form className={styles.inputArea} onSubmit={handleSubmit}>
          <span className={styles.prompt}>$</span>
          <input
            className={styles.input}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="digite um comando..."
            autoFocus
            disabled={isLoading}
          />
          <button className={styles.sendBtn} type="submit" disabled={isLoading}>
            ↵
          </button>
        </form>
      </div>
    </main>
  )
}

export default Terminal