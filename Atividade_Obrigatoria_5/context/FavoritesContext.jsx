import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
	const [favorites, setFavorites] = useState(() => {
		const saved = localStorage.getItem("favorites");
		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	const addFavorite = (movie) => {
		if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
			setFavorites([...favorites, movie]);
		}
	};

	const removeFavorite = (id) => {
		setFavorites(favorites.filter((fav) => fav.imdbID !== id));
	};

	return (
		<FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
			{children}
		</FavoritesContext.Provider>
	);
}

export const useFavorites = () => useContext(FavoritesContext);
