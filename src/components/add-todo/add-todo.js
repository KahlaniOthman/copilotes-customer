import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import "./style.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "50ch",
  },
  btn: {
    width: "57ch",
    margin: theme.spacing(1),
  },
}));
const AddTodo = ({ task = {}, setTask, handleAddTodo }) => {
  const classes = useStyles();

  return (
    <div className="add-todo">
      <h2>What needs to be done?</h2>
      <TextField
        id="filled-basic"
        label="Title"
        variant="filled"
        color="secondary"
        className={clsx(classes.margin, classes.textField)}
        value={task?.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
      />
      <TextField
        id="filled-basic"
        label="Description"
        variant="filled"
        color="secondary"
        className={clsx(classes.margin, classes.textField)}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        value={task?.description}
      />
      <Button
        onClick={handleAddTodo}
        variant="contained"
        color="secondary"
        className={clsx(classes.btn)}
        disabled={!(task.name && task.description)}
      >
        {!task?.id ? "Add To Do" : "Update To Do"}
      </Button>
    </div>
  );
};
export default AddTodo;
