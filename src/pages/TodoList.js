import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todo, listType, completeTodo, deleteTodo }) {
    let filteredTodos = todo.filter((item) => {
      if (listType === "all") {
        return true;
      } else if (listType === "completed") {
        if (item.completed === true) {
          return true;
        }
      } else {
        if (item.completed === false) {
          return true;
        }
      }
      return false;
    });

  return (
    <ul>
      {filteredTodos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
