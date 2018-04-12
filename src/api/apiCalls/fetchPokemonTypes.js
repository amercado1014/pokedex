export const fetchPokemonTypes = async () => {
  const url = "http://localhost:3001/types";
  try {
    const response = await fetch(url);
    const pokemonTypes = await response.json();
    return pokemonTypes
  } catch (error) {
    throw new Error(`Error getting pokemon types: ${error.message}`)
  }
}