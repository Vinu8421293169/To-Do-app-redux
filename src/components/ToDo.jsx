import React from "react";
import { connect } from "react-redux";
import {
  changeTitle,
  deleteTodo,
  setDescription,
  onCompleted,
} from "../redux/actions";
import "./styles.css";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffTwoTone";
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
function ToDo(props) {


  const { id, completed, color, title, description } = props.state.find(
    (prop) => prop.id === props.todo.id
  );

  const style = {
    backgroundColor: color,
  };

  return (
    <div className={"To-Do " + color + (completed ? " del" : "")} style={style}>
      <input
        className={"title ".concat(completed ? "done" : "")}
        placeholder="Title"
        value={title}
        onChange={(event) => {
          const str = event.target.value;
          const temp = str.charAt(0).toUpperCase() + str.slice(1);
          props.dispatch(changeTitle(id, temp));
        }}
      ></input>
      <textarea
        className={"description ".concat(completed ? "done" : "")}
        placeholder="Description"
        value={description}
        onChange={(event) =>
          props.dispatch(setDescription(id, event.target.value))
        }
      ></textarea>
      <br />
      <div className="right">
        <DeleteTwoToneIcon
          className="remove"
          alt="Remove"
          width="20px"
          title="Delete TO-DO"
          onClick={() => {
            props.dispatch(deleteTodo(id));
          }}
        />
        {completed ? (
          <HighlightOffTwoToneIcon
            className="completed"
            alt={completed ? "Mark Not Done" : "Mark Done"}
            width="20px"
            title={completed ? "Mark Not Done" : "Mark Done"}
            onClick={() => props.dispatch(onCompleted(id))}
          />
        ) : (
          <CheckCircleTwoToneIcon
            className="completed"
            alt={completed ? "Mark Not Done" : "Mark Done"}
            width="20px"
            title={completed ? "Mark Not Done" : "Mark Done"}
            onClick={() => props.dispatch(onCompleted(id))}
          />
        )}
      </div>
    </div>
  );
}

function mapPropsToState(state) {
  return {
    state,
  };
}

export default connect(mapPropsToState)(ToDo);
