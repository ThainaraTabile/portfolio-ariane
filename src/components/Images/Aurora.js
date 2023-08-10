import imgAurora from '../../assets/generalMedia/aurora.png';
import styles from './Images.module.css'

export default function Aurora() {
    return(
        <div >
            <img src={imgAurora} alt="Aurora"  className={styles.aurora}/>
        </div>
    )
}