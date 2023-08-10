import styles from './CardProjects.module.css';
import data from '../../../db.json';

export default function CardProjects() {
    return (
        <div className={styles.content}>
            {
                data.projects.data.map(project => (
                    <div className={styles.container}>
                        <h2 className={styles.titleProject}>{project.name}</h2>
                        <div className={styles.containerImg} key={project.id}>
                            <img src={project.image} alt={project.name} />
                        </div>
                        <p>{project.description}</p>
                      
                        <div className={styles.links}>
                        <span className={styles.linkApp}>
                            <a href={project.website}> Acesse a aplicação</a>
                        </span>
                        <span className={styles.linkRepo}>
                            <a href={project.repository} className={styles.link}> Repositório no GitHub</a>
                        </span>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}