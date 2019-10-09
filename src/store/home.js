import * as type from '../redux/actionTypes';
function home(state = 0, action) {
  switch (action.type) {
    case type.ADD1_SUCCESS:
      return state + 1;
    default:
      return state;
  }
}

export default home;
