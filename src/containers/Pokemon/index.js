import React, { Component} from 'react';
import PropTypes from 'prop-types';

export class Pokemon extends Component {
  render() {
    const { name } = this.props.type
    return (
      <div>
        {name}
      </div>
    )
  }
}

Pokemon.propTypes = {
  types: PropTypes.object
};

export default Pokemon;