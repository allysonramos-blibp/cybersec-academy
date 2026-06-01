import attacks from '../../data/attacks.js'
import AttackCard from '../../components/AttackCard/AttackCard'
import styles from './Catalog.module.css'

function Catalog() {
  return (
    <main className={styles.container}>
      <h1>Catálogo de Ameaças</h1>
      <div className={styles.grid}>
        {attacks.map(attack => (
          <AttackCard
            key={attack.id}
            attack={attack}
            onClick={() => console.log(attack.id)}
          />
        ))}
      </div>
    </main>
  )
}

export default Catalog