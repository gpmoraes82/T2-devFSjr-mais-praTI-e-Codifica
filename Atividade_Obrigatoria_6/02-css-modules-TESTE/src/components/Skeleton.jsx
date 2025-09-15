import styles from "./Skeleton.module.css";

export default function Skeleton({ variant }) {
    return <div className={`${styles.skeleton} ${styles[variant]}`} />;
}
