import '../styles/global.css';

const Button = ({
    children,
    variant = 'solid',
    disabled = false,
    loading = false,
    onClick,
    type = 'button',
    ...props
}) => {
    const className = `btn btn-${variant} ${loading ? 'btn-loading' : ''}`;

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