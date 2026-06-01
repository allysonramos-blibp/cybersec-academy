import { useState, useRef, useEffect } from 'react'
import attacks from '../../data/attacks.js'
import commands from '../../data/commands.js'
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
      return
    }

    
    if (main === 'scan') {
      if (!arg) {
        return 'Uso correto: scan [nome-do-ataque]. Ex: scan phishing'
      }
      const attack = attacks.find(a => a.id === arg)
      if (!attack) {
        return `Ataque "${arg}" não encontrado. Digite "attacks" para ver a lista.`
      }
      return `${attack.icon} ${attack.name}
  Categoria : ${attack.category}
  Dificuldade: ${attack.difficulty}
  Descrição : ${attack.description}
  Proteção  : ${attack.howToProtect}`
    }

    
    if (commands[main]) {
      return commands[main].response
    }

    return `Comando "${trimmed}" não reconhecido. Digite "help" para ajuda.`
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
      setHistory(prev => [...prev, { type: 'output', text: response }])
      setIsLoading(false)
    }, 500)
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
          {history.map((line, index) => (
            <div key={index} className={styles[line.type]}>
              {line.type === 'input' && (
                <span className={styles.prompt}>$ </span>
              )}
              <pre>{line.text}</pre>
            </div>
          ))}

          
          {isLoading && (
            <div className={styles.system}>
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