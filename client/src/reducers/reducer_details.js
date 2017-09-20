import { FETCH_DETAILS, CLEAR_DETAILS } from '../actions';
import _ from 'lodash';

export default function (state = [], action) {
  switch (action.type) {
    case CLEAR_DETAILS:
      return state = [];
    case FETCH_DETAILS:
      return [ action.payload, ...state ] 
    default:
      return state;
  }
}