import { FETCH_GYMS, CLEAR_GYMS, FETCH_DETAILS } from '../actions';
import _ from 'lodash';

export default function (state = [], action) {
  switch (action.type) {
    case CLEAR_GYMS:
      return state = [];
    case FETCH_GYMS:
      return [ action.payload.place, ...state ];
    default:
      return state;
  }
}