import React, { Component } from 'react';
import './styles.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPokemonTypes } from '../../actions';
import { fetchPokemonTypes } from "../../api/apiCalls/fetchPokemonTypes";
import { withRouter } from 'react-router-dom';
import Pokemon from '../Pokemon';

export class PokemonContainer extends Component {

  async componentDidMount() {
    const types = await fetchPokemonTypes();
    this.props.addPokemonTypes(types);
  }

  render() {
    const { pokemonTypes } = this.props;
    console.log(pokemonTypes);
    const displayPokemon = pokemonTypes.map(type => {
      return <Pokemon key={type.id} type={type}/>
    });

    return (
      <div className="pokemon-container">
        {!pokemonTypes.length && <p>Loading...</p>}
        {displayPokemon}
      </div>
    );
  }
}

PokemonContainer.propTypes = {
  addPokemonTypes: PropTypes.func
};

export const mapStateToProps = state => ({ 
  pokemonTypes: state.pokemonTypes
});

export const mapDispatchToProps = dispatch => ({ 
  addPokemonTypes: pokemonTypes => dispatch(addPokemonTypes(pokemonTypes))
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonContainer));
