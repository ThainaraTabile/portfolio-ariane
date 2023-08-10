import { Link} from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <nav className={styles.container}>
                
            <ul>
          <li>
            <Link to="/">início</Link>
          </li>
          <li>
            <Link to="/sobre">sobre mim</Link>
          </li>
          <li>
            <Link to="/projetos">projetos</Link>
          </li>
          <li>
            <Link to="/contato">contato</Link>
          </li>
        </ul>
            </nav>
        </header>
    )
}