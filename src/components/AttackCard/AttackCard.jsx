import CategoryBadge from '../CategoryBadge/CategoryBadge'
import styles from './AttackCard.module.css'

const AttackCard = ({ attack, onClick }) => {
    const { name, description, difficulty,category, icon } = attack

    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.header}>
                <span className={styles.icon}>{icon}</span>
                <CategoryBadge category={category} />
            </div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.description}>{description}</p>
            <span className={`${styles.difficulty} ${styles[difficulty]}`}>
                Dificuldade: {difficulty}</span>
        </div>
    )
}

export default AttackCard