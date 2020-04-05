import { FETCH_CARS } from '../actions';

export default function(state = [], action) {
  console.log(FETCH_CARS);
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    default:
      return state;
  }
}
