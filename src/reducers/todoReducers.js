import { TODO_LIST_SUCCESS } from "constants/todoConstants";

function todoListReducer(state = {}, action) {
  switch (action.type) {
    case TODO_LIST_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export { todoListReducer };
