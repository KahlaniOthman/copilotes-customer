import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cls } from "reactutils";

import AddTodo from "components/add-todo";
import { addTodo } from "actions/todoActions";
import TodoCard from "components/todo-card";

import "./style.css";

const TodoPage = () => {

  const [task, setTask] = useState({});
  const [activeFilter, setActiveFilter] = useState("all");

  const todos = useSelector((state) => state.todoList);

  const dispatch = useDispatch();


  const tabs = [
    { label: "All Tasks", id: "all" },
    { label: "Not Completed Tasks", id: "active" },
    { label: "Completed Tasks", id: "completed" },
  ];

  const handleAddTodo = () => {
    //  if task state have not id property, also we add it to todoList in global state,
    // else we replace in to do list
    // here we use same action to update to do list for post and put
    // new date to provide unique id to task
    !task?.id
      ? dispatch(addTodo([...todos, { ...task, id: new Date().getTime() }]))
      : dispatch(
          addTodo([
            ...todos.map((tsk) =>
              tsk.id === task.id
                ? {
                    ...tsk,
                    name: task.name,
                    description: task.description,
                  }
                : tsk
            ),
          ])
        );

    // initiate task state
    setTask({ name: "", description: "" });
  };

  const handleChangeStatus = (status, taskId) => {
    dispatch(
      addTodo([
        ...todos.map((task) =>
          task.id === taskId
            ? {
                ...task,
                completed: status,
              }
            : task
        ),
      ])
    );
  };

  const handleDeleteToDo = (taskId) => {
    // delete task
    dispatch(addTodo([...todos.filter((el) => el.id !== taskId)]));
  };

  const displayTodoList = () => {
    // display tasks with filter task completed task and not completed
    let filterList = todos;
    if (activeFilter !== "all") {
      filterList =
        activeFilter === "active"
          ? todos.filter((el) => !el.completed)
          : todos.filter((el) => el.completed);
    }
    return filterList.map((el) => (
      <TodoCard
        todoData={el}
        handleDelete={handleDeleteToDo}
        handleEdit={setTask}
        handleChangeStatus={handleChangeStatus}
      />
    ));
  };

  return (
    <div className="todo-page">
      <AddTodo task={task} setTask={setTask} handleAddTodo={handleAddTodo} />
      <div className="todo-page-filter">
        {tabs.map((tab) => (
          <span
            key={tab.id}
            className={cls("box", activeFilter === tab.id ? "active" : "")}
            onClick={() => setActiveFilter(tab.id)}
          >
            {tab.label}
          </span>
        ))}
      </div>
      <section className="todo-list-container">{displayTodoList()}</section>
    </div>
  );
};
export default TodoPage;
