import styles from "./Button.module.css";

export default function Button({ variant = "solid", children, ...props }) {
    const cls = `${styles.btn} ${variant === "outline" ? styles.btnOutline : variant === "ghost" ? styles.btnGhost : styles.btnSolid}`;
    return <button className={cls} {...props}>{children}</button>;
}
