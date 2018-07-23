export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      debugger;
      return [...state, Object.assign({}, action.course)];
    case 'LOAD_COURSES_SUCCESS':
      debugger;
      return action.courses;
    default:
      return state;
  }
}
