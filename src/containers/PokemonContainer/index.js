import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addPokemonTypes } from '../../actions';
import { fetchPokemonTypes } from "../../api/apiCalls/fetchPokemonTypes";

class PokemonContainer extends Component {

  async componentDidMount() {
    const types = await fetchPokemonTypes();
    this.props.addPokemonTypes(types);
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.fakeAction();
            alert("FAKE");
          }}
        >
          {" "}
          FAKE{" "}
        </button>
      </div>
    );
  }
}

PokemonContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => ({ 
  addPokemonTypes: pokemonTypes => dispatch(addPokemonTypes(pokemonTypes))
});
export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
