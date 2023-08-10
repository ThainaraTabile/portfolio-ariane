import Aurora from '../../components/Images/Aurora';
import styles from './Contact.module.css';
import ContactLinks from './ContactLinks';

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Aurora />
            </div>
            <div className={styles.text}>
                <article>
                    <h1 className={styles.title}>Contato</h1>
                    <p>Estou entusiasmada para embarcar nesta jornada emocionante e estou aberta a novas oportunidades que me permitam contribuir de forma significativa para a indústria de tecnologia.</p>
                    <p>Se você estiver interessado em discutir oportunidades de trabalho ou projetos.</p>
                </article>
                <ContactLinks/>
            </div>
        </div>
    )
}






