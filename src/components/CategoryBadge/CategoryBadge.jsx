import styles from './CategoryBadge.module.css'

function CategoryBadge({ category }) {
  return (
    <span className={`${styles.badge} ${styles[category.replace(/\s/g, '')]}`}>
      {category}
    </span>
  )
}

export default CategoryBadge