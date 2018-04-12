import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPokemonTypes } from '../../actions';
import { fetchPokemonTypes } from "../../api/apiCalls/fetchPokemonTypes";
import { withRouter } from 'react-router-dom';

export class PokemonContainer extends Component {

  async componentDidMount() {
    const types = await fetchPokemonTypes();
    this.props.addPokemonTypes(types);
  }

  render() {
    const { pokemonTypes } = this.props
    return <div>
        {!pokemonTypes.length && <p>Loading...</p>}
        Pokemon Container
      </div>;
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
