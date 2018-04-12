import { combineReducers } from 'redux';
import fakeReducer from './fake-reducer';
import pokemonTypes from './pokemon-reducer';

const rootReducer = combineReducers({
  fake: fakeReducer,
  pokemonTypes
})

export default rootReducer
