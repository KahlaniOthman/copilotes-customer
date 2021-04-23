import Cookie from "js-cookie";

import { TODO_LIST_SUCCESS } from "constants/todoConstants";

const addTodo = (todoList) => (dispatch) => {
  // add tasks to list
  dispatch({ type: TODO_LIST_SUCCESS, payload: todoList });
  // we set to do list in cookies to keep a list when we refresh page
  Cookie.set("todoList", JSON.stringify(todoList));
};

export { addTodo };
