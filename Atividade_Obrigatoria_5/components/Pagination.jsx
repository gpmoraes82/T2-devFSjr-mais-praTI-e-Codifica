export default function Pagination({ page, totalResults, onPageChange }) {
    const totalPages = Math.ceil(totalResults / 10);

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-4 mt-6">
            <button
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
                Anterior
            </button>

            <span className="font-medium">
                Página {page} de {totalPages}
            </span>

            <button
                disabled={page === totalPages}
                onClick={() => {
                    console.log("Botão clicado", page);
                    onPageChange(page + 1);
                }}
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
                Próxima
            </button>
        </div>
    );
}
