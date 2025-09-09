import styles from "./Skeleton.module.css";

export function Skeleton({ width = "100%", height = "1rem", borderRadius = "4px" }) {
  return (
    <div
      className={styles.skeleton}
      style={{ width, height, borderRadius }}
      role="status"
      aria-label="Carregando..."
    />
  );
}
