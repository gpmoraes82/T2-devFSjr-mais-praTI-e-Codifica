import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const API_KEY = "SUA_API_KEY"; // substitua pela sua chave do OMDb

export default function Search() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        if (query.length < 3) return;

        setLoading(true);
        setError("");

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.Response === "True") {
                    setMovies(data.Search);
                    setTotalResults(parseInt(data.totalResults, 10));
                } else {
                    setError(data.Error);
                    setMovies([]);
                }
            })
            .catch(() => setError("Erro ao buscar filmes"))
            .finally(() => setLoading(false));
    }, [query, page]);

    console.log("Props que envio para Pagination:", {
        page,
        totalResults,
        onPageChange: (typeof setPage)
    });

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Buscar Filmes</h1>
            <input
                type="text"
                placeholder="Digite o nome do filme..."
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                }}
                className="border rounded px-3 py-2 w-full max-w-md mb-4"
            />

            {loading && <p className="flex items-center justify-center text-blue-500">Carregando...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
                {movies.map((movie, index) => (
                    <MovieCard key={`${movie.imdbID}-${index}`} movie={movie} />
                ))}
            </div>

            {loading && <p className="flex items-center justify-center text-blue-500">Carregando...</p>}

            <Pagination
                page={page}
                totalResults={totalResults}
                onPageChange={(newPage) => {
                    console.log("onPageChange chamado com:", newPage);
                    setPage(newPage);
                }}
            />

        </div>
    );
}
