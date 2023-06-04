import { NavLink } from 'react-router-dom'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to='/' className={styles.brand}>
            GREGORIO <span>HyperDEV</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to='/' className={({isActive}) => (isActive ? styles.active : '') }>Home</NavLink>
            </li>
             <li>
                <NavLink to='/login' className={({isActive}) => (isActive ? styles.active : '') }>Login</NavLink>
            </li>
            <li>
                <NavLink to='/post' className={({isActive}) => (isActive ? styles.active : '') }>Posts</NavLink>
            </li>
             {/*<li>
                <NavLink to='/cadastro' className={({isActive}) => (isActive ? styles.active : '') }>Cadastro</NavLink>
            </li> */}
            <li>
                <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : '') }>Sobre</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar