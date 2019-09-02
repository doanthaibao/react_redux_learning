import * as types from "../actions/actionTypes";
const initState = {
  authors: []
};

export default function authorReducer(state = initState, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return { authors: action.authors };
    default:
      return state;
  }
}
