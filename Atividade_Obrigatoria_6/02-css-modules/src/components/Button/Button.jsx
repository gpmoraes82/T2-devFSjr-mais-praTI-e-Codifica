import styles from './Button.module.css';

const Button = ({
    children,
    variant = 'solid',
    disabled = false,
    loading = false,
    onClick,
    type = 'button',
    ...props
}) => {
    const className = `${styles.btn} ${styles[`btn-${variant}`]} ${loading ? styles['btn-loading'] : ''}`;

    return (
        <button
            className={className}
            disabled={disabled || loading}
            onClick={onClick}
            type={type}
            {...props}
        >
            {loading ? 'Carregando...' : children}
        </button>
    );
};

export default Button;