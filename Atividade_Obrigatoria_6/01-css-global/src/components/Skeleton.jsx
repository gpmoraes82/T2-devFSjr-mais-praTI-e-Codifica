export function Skeleton({ width = "100%", height = "1rem", borderRadius = "4px" }) {
  return (
    <div
      className="skeleton"
      style={{ width, height, borderRadius }}
      role="status"
      aria-label="Carregando..."
    />
  );
}
