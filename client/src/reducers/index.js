import { combineReducers } from 'redux';
import GymsReducer from './reducer_gyms';

const rootReducer = combineReducers({
  gyms: GymsReducer
});

export default rootReducer;