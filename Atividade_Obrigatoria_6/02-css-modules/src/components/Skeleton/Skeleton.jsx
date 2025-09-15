import styles from './Skeleton.module.css';

const Skeleton = ({ width = '100%', height = '1rem', borderRadius = 'var(--border-radius-md)' }) => {
    return (
        <div
            className={styles.skeleton}
            style={{ width, height, borderRadius }}
            aria-hidden="true"
        ></div>
    );
};

export default Skeleton;