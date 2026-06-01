import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import attacks from '../../data/attacks.js'
import AttackCard from '../../components/AttackCard/AttackCard'
import FilterBar from '../../components/FilterBar/FilterBar'
import styles from './Catalog.module.css'

function Catalog() {
  const navigate = useNavigate()

  
  const [activeCategory, setActiveCategory] = useState('Todos')

  
  const categories = [...new Set(attacks.map(a => a.category))]

  
  const filteredAttacks = activeCategory === 'Todos'
    ? attacks
    : attacks.filter(a => a.category === activeCategory)

  return (
    <main className={styles.container}>
      <h1>Catálogo de Ameaças</h1>

      
      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      
      <div className={styles.grid}>
        {filteredAttacks.map(attack => (
          <AttackCard
            key={attack.id}
            attack={attack}
            onClick={() => navigate(`/detalhes/${attack.id}`)}
          />
        ))}
      </div>
    </main>
  )
}

export default Catalog