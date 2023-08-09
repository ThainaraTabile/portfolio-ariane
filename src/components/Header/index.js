import styles from './Header.module.css';
//import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav className={styles.container}>
                
   <ul>
    <li> sobre mim</li>
    <li> projetos</li>
    <li> contato</li>
    
   </ul>
            </nav>
        </header>
    )
}