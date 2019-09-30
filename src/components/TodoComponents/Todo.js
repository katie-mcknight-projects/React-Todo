import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <>
      <p
        className={props.todo.completed ? "todo complete" : "todo incomplete"}
        onClick={() => props.toggleTodo(props.todo.id)}
      >
        {props.todo.task}
      </p>
    </>
  );
}

export default Todo;
