import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <span className={styles.logo}>Cyber Security Academy</span>
            <ul className={styles.links}>
                <li>
                    <NavLink to="/">Home</NavLink></li>
                <li>
                    <NavLink to="/catalogo">Catálogo</NavLink></li>
                <li>
                    <NavLink to="/terminal">Terminal</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar