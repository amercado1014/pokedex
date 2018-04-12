import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { fetchPokemon } from '../../api/apiCalls/fetchPokemon';

export class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      normal: [],
      fighting: [],
      flying: [],
      poison: [],
      ground: [],
      rock: [],
      bug: [],
      ghost: [],
      steel: [],
      displayedPokemon: [],
      show: false,
    }
  }

  handleClick = async (pokemonIdArray, name) => {
    if (!this.state[name].length) {
      const pokemon=  await Promise.all(fetchPokemon(pokemonIdArray));
      this.setState({
        [name]: pokemon,
        show: !this.state.show
      });
    } 

    this.setState({
        displayedPokemon: this.state[name],
        show: !this.state.show
      });
  }

  render() {
    const { displayedPokemon, show } = this.state
    const { name, pokemon } = this.props.type
    const displayPokemon = displayedPokemon.map(pokemon => {
      return (
        <div>
          <p>Name: {pokemon.name}</p>
          <p>Weight: {pokemon.weight}</p>
          <img src={pokemon.sprites.back_default} alt="pokemon"/>
        </div>
      );
    })

    return (
      <div className="pokemon"
        onClick={() => this.handleClick(pokemon, name)}>
        <p>{name}</p>
        {show &&
        <div>
          {displayPokemon}
        </div>
        }
      </div>
    )
  }
}

Pokemon.propTypes = {
  types: PropTypes.object
};

export default Pokemon;