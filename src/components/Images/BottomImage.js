import styles from './Images.module.css';

const BottomImage = ({ src, alt }) => {
    return (
        <div className={styles.divImgBottom}>
            <img src={src} alt={alt} className={styles.imgBottom} />
        </div>
    );
}

export default BottomImage;
