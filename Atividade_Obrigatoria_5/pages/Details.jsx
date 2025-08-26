import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function Details() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
            .then((res) => res.json())
            .then((data) => {
                if (data.Response === "True") setMovie(data);
                else setError(data.Error);
            })
            .catch(() => setError("Erro ao carregar detalhes"))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
    if (!movie) return null;

    return (
        <div>
            <h1>{movie.Title} ({movie.Year})</h1>
            <img src={movie.Poster} alt={movie.Title} />
            <p><strong>Diretor:</strong> {movie.Director}</p>
            <p><strong>Elenco:</strong> {movie.Actors}</p>
            <p><strong>Sinopse:</strong> {movie.Plot}</p>
            <p><strong>Avaliação:</strong> {movie.imdbRating}</p>
        </div>
    );
}
