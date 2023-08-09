import styles from './Template.module.css';

const Template = ({ title, content, children }) => {
    return (
        <section className={styles.background}>
            <div className={styles.container}>
                {children}
                <h1>{title}</h1>
            </div>
            <div className={styles.content}>
                    {content}
            </div>
        </section>
    );
}

export default Template;