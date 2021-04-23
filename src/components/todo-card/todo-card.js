import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import moment from "moment";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import "./style.css";

const useStyles = makeStyles((theme) => ({
  width: {
    width: "45%",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
const TodoCard = ({
  todoData,
  handleChangeStatus,
  handleDelete,
  handleEdit,
}) => {
  const classes = useStyles();

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  return (
    <div className="todo-card">
      <div className="todo-card-header">
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={todoData.completed}
              onChange={(v) =>
                handleChangeStatus(v.target.checked, todoData.id)
              }
              name="checkedG"
            />
          }
          label=""
        />
        <div>
          <div>
            <b className="label">Title:</b> {todoData.name}
          </div>
          <div>
            <b className="label">Description:</b>
            {todoData.description}
          </div>
          <div>
            <b className="label">Created On:</b>
            {moment(todoData.id).format("DD MMM, YYYY HH:MM A")}
          </div>
        </div>
      </div>
      <div className="actions">
        <Button
          onClick={() => handleEdit(todoData)}
          variant="contained"
          color="primary"
          className={clsx(classes.margin, classes.width)}
        >
          Edit
        </Button>
        <Button
          onClick={() => handleDelete(todoData.id)}
          variant="contained"
          className={clsx(classes.margin, classes.width)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
export default TodoCard;
