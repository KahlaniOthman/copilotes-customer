import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import { todoListReducer } from "reducers/todoReducers";

import { userSignInReducer } from "reducers/userReducers";

// initiate userInfo and todo list with getting information stored in cookie when we refresh page
// or  change window
const userInfo = Cookie.getJSON("userInfo") || null;
const todoList = Cookie.getJSON("todoList") || [];

const initialState = {
  todoList,
  userInfo,
};

const reducer = combineReducers({
  todoList: todoListReducer,
  userInfo: userSignInReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
