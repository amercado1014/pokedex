export const fetchPokemon = (pokemonIdArray) => {
  return pokemonIdArray.map(async (id) => {
    const url = `http://localhost:3001/pokemon/${id}`;
    try {
      const response = await fetch(url);
      const pokemon = await response.json();
      return pokemon
    } catch (error) {
      throw new Error(`Error getting pokemon: ${error.message}`);
    }
  });
};
