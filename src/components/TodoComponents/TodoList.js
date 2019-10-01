// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("TODO LIST THIS:", this);
    return (
      <>
        {this.props.todos.map(todo => {
          return <Todo todo={todo} toggleTodo={this.props.toggleTodo} />;
        })}
      </>
    );
  }
}

export default TodoList;
