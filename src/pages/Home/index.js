import styles from './Home.module.css';

export default function Home () {
    return(
        <section className={styles.background}>
            <div className={styles.containerDev}>
               <h1>olá, mundo! eu sou </h1>
               <h2>ariane vieira</h2>
               <h5>desenvolvedora web front-end</h5>
            </div>
        </section>
    )
}