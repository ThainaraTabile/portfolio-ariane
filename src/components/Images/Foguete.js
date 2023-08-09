import imgFoguete from '../../assets/generalMedia/foguete.png';
import styles from './Images.module.css'

export default function Foguete() {
    return(
        <div className={styles.divFoguete}>
            <img src={imgFoguete} alt="Foguete" className={styles.foguete}/>
        </div>
    )
}