import imgSatelite from '../../assets/generalMedia/satelite.png';
import styles from './Images.module.css'

export default function Satelite() {
    return(
        <div>
            <img src={imgSatelite} alt="Satélite" className={styles.satelite}/>
        </div>
    )
}