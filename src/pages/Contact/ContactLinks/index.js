import styles from './ContactLinks.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export default function ContactLinks() {
    return(
        <div className={styles.container}>
            <span>
                    <a href="mailto:arianevieira26@gmail.com ">
                        <MdEmail size={35} />
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/arianevieiradev/">
                        <BsLinkedin size={32} />
                    </a>
                </span>
                <span>
                    <a href="https://github.com/VieiraAriane">
                        <BsGithub size={32} />
                    </a>
                </span>
        </div>
    )
}