import styles from './FilterBar.module.css'

function FilterBar({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className={styles.container}>
      {categories.map(category => (
        <button
          key={category}
          className={`${styles.btn} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default FilterBar