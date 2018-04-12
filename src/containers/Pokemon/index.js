import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export class Pokemon extends Component {
  render() {
    const { name } = this.props.type
    return (
      <div className="pokemon">
        <p>{name}</p>
      </div>
    )
  }
}

Pokemon.propTypes = {
  types: PropTypes.object
};

export default Pokemon;