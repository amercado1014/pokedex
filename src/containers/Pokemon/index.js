import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { fetchPokemon } from '../../api/apiCalls/fetchPokemon';

export class Pokemon extends Component {

  handleClick = async (pokemonIdArray) => {
    const pokemonArray =  await Promise.all(fetchPokemon(pokemonIdArray));
    console.log(pokemonArray)
  }

  render() {
    const { name, pokemon } = this.props.type
    return (
      <div className="pokemon"
        onClick={() => this.handleClick(pokemon)}>
        <p>{name}</p>
      </div>
    )
  }
}

Pokemon.propTypes = {
  types: PropTypes.object
};

export default Pokemon;