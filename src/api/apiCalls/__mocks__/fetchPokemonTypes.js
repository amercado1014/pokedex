import { mockPokemonTypes } from '../../../mockData';

export const fetchPokemonTypes = jest.fn().mockImplementation(() => {
  return Promise.resolve({ mockPokemonTypes });
});
