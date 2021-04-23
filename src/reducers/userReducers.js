import { USER_SIGNIN_SUCCESS, USER_LOGOUT } from "constants/userConstants";

function userSignInReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return action.payload;
    case USER_LOGOUT:
      return action.payload;
    default:
      return state;
  }
}

export { userSignInReducer };
