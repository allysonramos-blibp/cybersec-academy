import { useParams, useNavigate } from 'react-router-dom'
import attacks from '../../data/attacks.js'
import CategoryBadge from '../../components/CategoryBadge/CategoryBadge'
import styles from './Details.module.css'

function Details() {
  const { id } = useParams()
  const navigate = useNavigate()

  
  const attack = attacks.find(a => a.id === id)

  
  if (!attack) {
    return (
      <div className={styles.notFound}>
        <h2>Ataque não encontrado</h2>
        <button onClick={() => navigate('/catalogo')}>
          Voltar ao catálogo
        </button>
      </div>
    )
  }

  return (
    <main className={styles.container}>
      <button className={styles.backBtn} onClick={() => navigate('/catalogo')}>
        ← Voltar
      </button>

      <div className={styles.header}>
        <span className={styles.icon}>{attack.icon}</span>
        <div>
          <h1>{attack.name}</h1>
          <CategoryBadge category={attack.category} />
        </div>
      </div>

      <div className={styles.grid}>
        <section className={styles.card}>
          <h2> O que é?</h2>
          <p>{attack.description}</p>
        </section>

        <section className={styles.card}>
          <h2> Como funciona?</h2>
          <p>{attack.howItWorks}</p>
        </section>

        <section className={styles.card}>
          <h2>Como se proteger?</h2>
          <p>{attack.howToProtect}</p>
        </section>

        <section className={styles.card}>
          <h2>caso real</h2>
          <p>{attack.realExample}</p>
        </section>
      </div>
    </main>
  )
}

export default Details