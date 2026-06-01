import styles from './FilterBar.module.css'

const categories = ['Todos', 'Engenharia Social', 'Malware', 'Rede', 'Aplicação Web']

function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className={styles.container}>
      {categories.map(category => (
        <button
          key={category}
          className={`${styles.button} ${activeFilter === category ? styles.active : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default FilterBar