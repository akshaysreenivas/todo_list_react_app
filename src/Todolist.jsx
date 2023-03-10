import React from "react";
import Todo from "./Todo";

function Todolist({ todos, toggleComplete, deleteTask }) {
  if (todos) {
    return todos.map((todo) => (
      <Todo
        key={todo.id}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        todo={todo}
      />
    ));
  }
}

export default Todolist;
