import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import { fetchPokemonTypes } from '../../api/apiCalls/fetchPokemonTypes';

class App extends Component {

  async componentDidMount() {
    const pokemonTypes =  await fetchPokemonTypes()
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
      </div>
    );
  }
}


export default App;
