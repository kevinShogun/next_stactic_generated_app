/* eslint-disable import/no-anonymous-default-export */
const toggleFavorite = (id: number) => {
	let favorites: number[] = JSON.parse(
		localStorage.getItem("favorites") || "[]"
	);

	if (favorites.includes(id)) {
		favorites = favorites.filter((pokeId) => pokeId !== id);
	} else {
		favorites.push(id);
	}
	localStorage.setItem("favorites", JSON.stringify(favorites));
};

const setInnerWidthLocal = () => {
	if(typeof window === "undefined") return false;
	 return window.innerWidth
};

const isFavorite = (id: number): boolean => {

	if(typeof window === "undefined") return false;
	
	let favorites: number[] = JSON.parse(
		localStorage.getItem("favorites") || "[]"
	);

	return favorites.includes(id);
};


const pokemons = (): number[] => {
	return  JSON.parse( localStorage.getItem("favorites") || "[]");
}

export default {
	toggleFavorite,
	setInnerWidthLocal,
	isFavorite,
	pokemons
};
