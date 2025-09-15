const Button = ({
    children,
    variant = 'solid',
    disabled = false,
    loading = false,
    onClick,
    type = 'button',
    className = '',
    ...props
}) => {
    const baseClasses = "inline-flex items-center justify-center px-sm py-xs rounded-md font-medium text-sm leading-5 cursor-pointer transition-all min-w-[80px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60 disabled:cursor-not-allowed";

    const variantClasses = {
        solid: "bg-accent text-white hover:bg-accent-hover border border-transparent",
        outline: "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white",
        ghost: "bg-transparent text-accent hover:bg-accent/10 border border-transparent"
    };

    const loadingClasses = loading ? "relative text-transparent" : "";

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${loadingClasses} ${className}`;

    return (
        <button
            className={combinedClasses}
            disabled={disabled || loading}
            onClick={onClick}
            type={type}
            {...props}
        >
            {loading ? 'Carregando...' : children}
            {loading && (
                <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-4 h-4 border-2 border-t-current border-transparent rounded-full animate-button-loading"></span>
                </span>
            )}
        </button>
    );
};

export default Button;