import { fetchPokemonTypes } from '../apiCalls/fetchPokemonTypes';
import { mockPokemonTypes } from '../../mockData';

describe('fetchPokemonTypes', () => {
  
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200, 
        json: () =>Promise.resolve(mockPokemonTypes)
      })
    );
  })

  it('should call fetch with correct url', () => {
    const url = "http://localhost:3001/types";
    fetchPokemonTypes();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should fetch pokemon types data if status is ok', () => {
    expect(fetchPokemonTypes()).resolves.toEqual(mockPokemonTypes);
  });

  it('should throw an error if status code is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500, 
      })
    );
    expect(fetchPokemonTypes()).rejects.toEqual(Error('Error getting pokemon types: response.json is not a function'));
  });
})