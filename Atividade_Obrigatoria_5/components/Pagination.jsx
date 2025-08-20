export default function Pagination({ page, totalResults, onPageChange }) {
    const totalPages = Math.ceil(totalResults / 10);

    if (totalPages <= 1) return null;

    return (
        <div style={{ marginTop: "1rem" }}>
            <button
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
            >
                Anterior
            </button>

            <span style={{ margin: "0 1rem" }}>
                Página {page} de {totalPages}
            </span>

            <button
                disabled={page === totalPages}
                onClick={() => onPageChange(page + 1)}
            >
                Próxima
            </button>
        </div>
    );
}
