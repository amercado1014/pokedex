import React, { Component } from 'react';
import './App.css';
import PokemonContainer from '../../containers/PokemonContainer/';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <PokemonContainer />
      </div>
    );
  }
}


export default App;
