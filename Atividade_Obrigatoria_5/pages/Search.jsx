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

    return (
        <div>
            <h1>Buscar Filmes</h1>
            <input
                type="text"
                placeholder="Digite o nome do filme..."
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                }}
            />

            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}

            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>

            <Pagination>
                page={page}
                totalResults={totalResults}
                onPageChange={(newPage) => setPage(newPage)}
            </Pagination>

        </div>
    );
}
