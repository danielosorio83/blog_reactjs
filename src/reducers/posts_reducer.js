import { FETCH_POSTS, FIND_POST } from '../constants';

const POSTS_INITIAL_STATE = { all: [], post: null };

export default function(state = POSTS_INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    case FIND_POST:
      return { ...state, post: action.payload.data };
    default:
      return state;
  }
}
