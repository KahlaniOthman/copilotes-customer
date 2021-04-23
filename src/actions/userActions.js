import Cookie from "js-cookie";
import { USER_SIGNIN_SUCCESS, USER_LOGOUT } from "constants/userConstants";

const signIn = (userInfo) => (dispatch) => {
  // we set user info to global state to manage login/logout user
  dispatch({ type: USER_SIGNIN_SUCCESS, payload: userInfo });
  // keep user log in when refresh or change window
  Cookie.set("userInfo", JSON.stringify(userInfo));
};

const logout = () => (dispatch) => {
  // user logout when we clear  user info state
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT, payload: null });
};
export { signIn, logout };
