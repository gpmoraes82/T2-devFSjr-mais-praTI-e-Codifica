import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function MovieCard({ movie }) {
	const { favorites, addFavorite, removeFavorite } = useFavorites();
	const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

	return (
		// <div className="border rounded p-2">
		// 	<img src={movie.Poster} alt={movie.Title} width="150" />
		// 	<h3>{movie.Title} ({movie.Year})</h3>
		// 	<Link to={`/details/${movie.imdbID}`}>Ver Detalhes</Link>
		// 	<button
		// 		onClick={() =>
		// 			isFavorite ? removeFavorite(movie.imdbID) : addFavorite(movie)
		// 		}
		// 	>
		// 		{isFavorite ? "Remover Favorito" : "Adicionar Favorito"}
		// 	</button>
		// </div>
		
		<div className="border rounded-lg shadow-md p-3 bg-white flex flex-col items-center">
			<img
				src={movie.Poster}
				alt={movie.Title}
				className="w-40 h-60 object-cover rounded-md mb-3"
			/>
			<h3 className="font-bold text-lg text-center">{movie.Title}</h3>
			<span className="text-gray-600 text-sm">{movie.Year}</span>

			<div className="flex gap-2 mt-3">
				<Link
					to={`/details/${movie.imdbID}`}
					className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
				>
					Ver Detalhes
				</Link>
				<button
					onClick={() =>
						isFavorite ? removeFavorite(movie.imdbID) : addFavorite(movie)
					}
					className={`px-3 py-1 rounded text-white ${isFavorite ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
						}`}
				>
					{isFavorite ? "Remover" : "Favoritar"}
				</button>
			</div>
		</div>
	);
}
