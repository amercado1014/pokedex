import React, { Component } from 'react';
import './App.css';
import PokemonContainer from '../../containers/PokemonContainer/';
import { Route, withRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <Route path='/' component={PokemonContainer} />
      </div>
    );
  }
}


export default withRouter(App);
