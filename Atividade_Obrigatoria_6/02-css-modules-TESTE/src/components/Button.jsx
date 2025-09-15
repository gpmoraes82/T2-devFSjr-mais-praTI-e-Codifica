import styles from "./Button.module.css";

export default function Button({ children, variant = "solid", ...props }) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
