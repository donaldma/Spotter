import { combineReducers } from 'redux';
import GymsReducer from './reducer_gyms';
import DetailsReducer from './reducer_details';

const rootReducer = combineReducers({
  gyms: GymsReducer,
  details: DetailsReducer
});

export default rootReducer;