import { FETCH_VIDEOS } from '../action/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      return action.payload.data.items;
    default:
      return state;
  }
}
