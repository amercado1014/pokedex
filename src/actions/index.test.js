import * as actions from './index';

describe('actions', () => {
  it('should have a type of ADD_POKEMON_TYPES', () => {
    const pokemonTypes = [{ id: 1}, { id: 2}]
    const expectedAction = {
      type: 'ADD_POKEMON_TYPES',
      pokemonTypes
    }
    expect(actions.addPokemonTypes(pokemonTypes)).toEqual(expectedAction);
  });
})