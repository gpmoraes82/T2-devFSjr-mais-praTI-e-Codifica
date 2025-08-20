import { useFavorites } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
    const { favorites } = useFavorites();

    return (
        <div>
            <h1>Meus Favoritos</h1>
            {favorites.length === 0 && <p>Nenhum filme favoritado ainda.</p>}
            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
                {favorites.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
}
