import * as type from '../redux/actionTypes';
function about(state = 10, action) {
  switch (action.type) {
    case type.ADD10_SUCCESS:
      return state + 10;
    default:
      return state;
  }
}

export default about;
