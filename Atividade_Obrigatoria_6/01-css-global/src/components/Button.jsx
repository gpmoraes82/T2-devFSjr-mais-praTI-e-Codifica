export default function Button({ variant = "solid", children, ...props }) {
    const cls = `btn ${variant === "outline" ? "btn--outline" : variant === "ghost" ? "btn--ghost" : "btn--solid"}`;
    return <button className={cls} {...props}>{children}</button>;
}
