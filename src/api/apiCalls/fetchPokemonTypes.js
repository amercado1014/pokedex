export const fetchPokemonTypes = async () => {
  const url = "http://localhost:3001/types";
  try {
    const response = await fetch(url);
    const pokemonTypes = await response.json();
    console.log(pokemonTypes);
    return pokemonTypes
  } catch (error) {
    throw error;
  }
}