import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <form>
          <input
            type="text"
            name="todo"
            placeholder="...todo"
            onChange={this.props.handleChange}
            value={this.props.todo}
          />
          <button onClick={this.props.addTodo}>Add Todo</button>
          <button onClick={this.props.clearCompleted}>Clear Completed</button>
        </form>
      </>
    );
  }
}

export default TodoForm;
