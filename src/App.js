import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Finish the list",
          id: 1,
          completed: false
        },
        {
          task: "Finish the Project",
          id: 2,
          completed: false
        }
      ],
      todo: ""
    };
  }

  toggleTodo = id => {
    console.log("look i made it");
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  addTodo = e => {
    e.preventDefault();
    let newTodo = { task: this.state.todo, id: Date.now(), completed: false };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ""
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <h2>Todo List:</h2>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <TodoForm
          addTodo={this.addTodo}
          handleChange={this.handleChange}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
