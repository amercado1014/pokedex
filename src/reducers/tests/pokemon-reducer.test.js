import reducer from '../pokemon-reducer';
import * as actions from '../../actions';

describe('pokemon reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  })

  it('should return state with pokemon types', () => {
    const pokemonTypes = [{ id: 1 }, { id: 2 }];
    const expected = [{ id: 1 }, { id: 2 }];
    const action = actions.addPokemonTypes(pokemonTypes);
    expect(reducer(undefined, action)).toEqual(expected);
  });
})