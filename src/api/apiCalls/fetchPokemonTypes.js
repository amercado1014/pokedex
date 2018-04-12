export const fetchPokemonTypes = async () => {
  const url = 'localhost:3001/types'
  try {
    const response = await fetch(url);
    const pokemonTypes = await response.json();
    console.log(pokemonTypes);
    return pokemonTypes
  } catch (error) {
    throw new Error('Error getting pokemon types:', error);
  }
}