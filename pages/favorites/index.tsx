import { useEffect, useState } from "react";
import { NextPage } from "next";
import localFavorites from "../../utils/localFavorites";
import { Layout } from "../../layouts";
import { FavoritesPokemons, NoFavorites } from "../../components/pokemon";

const Favorites: NextPage = () => {
	const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

	useEffect(() => {
		setFavoritesPokemons(localFavorites.pokemons());
	}, []);

	return (
		<Layout title="Favoritos">
			{favoritesPokemons.length === 0 ? (
				<NoFavorites />
			) : (
				<FavoritesPokemons favoritesPokemons={favoritesPokemons} />
			)}
		</Layout>
	);
};

export default Favorites;
