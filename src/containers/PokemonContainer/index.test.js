import React from 'react';
import { shallow } from 'enzyme';
import { PokemonContainer, mapStateToProps, mapDispatchToProps } from '../PokemonContainer';
import { fetchPokemonTypes } from '../../api/apiCalls/fetchPokemonTypes';

jest.mock('../../api/apiCalls/fetchPokemonTypes');

describe('PokemonContainer', () => {
  let wrapper;
  let mockAddPokemonTypes;
  let mockPokemonTypes;

  beforeEach(() => {
    mockAddPokemonTypes = jest.fn();
    mockPokemonTypes = [{ id: 1}, { id: 2}]
    wrapper = shallow(<PokemonContainer 
      addPokemonTypes={mockAddPokemonTypes} 
      pokemonTypes={mockPokemonTypes} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchPokemonTypes on componentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(fetchPokemonTypes).toHaveBeenCalled();
  });

  it('should call addPokemonTypes on componentDidMount', () => {
    wrapper.instance().componentDidMount();
    expect(mockAddPokemonTypes).toHaveBeenCalled();
  });

  it('should map pokemonTypes', () => {
    const mockStore = { pokemonTypes: mockPokemonTypes };
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  });

  it('should dispatch addPokemonTypes', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addPokemonTypes();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
