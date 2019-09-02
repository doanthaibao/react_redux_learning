import * as types from '../actions/actionTypes';
 
const initState = {
  courses: []
};
export default function courseReducer(state = initState, action) {
  switch (action.type) {
    case types.CREATE_COURSE: {
      return { ...state, courses: [...state.courses, action.course] };
    }
    case types.LOAD_COURSES_SUCCESS:{
      return {courses: action.courses};
    }
    default:
      return state;
  }
}
