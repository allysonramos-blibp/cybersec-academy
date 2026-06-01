import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  const navigate = useNavigate()

  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <span className={styles.badge}>🛡️ Plataforma Educacional</span>
        <h1 className={styles.title}>
          Entenda as ameaças.<br />
          Proteja-se melhor.
        </h1>
        <p className={styles.subtitle}>
          Explore os principais ataques cibernéticos, como funcionam
          e como se defender de cada um deles.
        </p>
        <div className={styles.buttons}>
          <button
            className={styles.primaryBtn}
            onClick={() => navigate('/catalogo')}
          >
            Ver catálogo de ameaças
          </button>
          <button
            className={styles.secondaryBtn}
            onClick={() => navigate('/terminal')}
          >
            Abrir terminal
          </button>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>6</span>
          <span className={styles.statLabel}>Ataques catalogados</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>4</span>
          <span className={styles.statLabel}>Categorias</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>100%</span>
          <span className={styles.statLabel}>Educacional e gratuito</span>
        </div>
      </section>
    </main>
  )
}

export default Home