import React from "react";
import TodoTableItem from "./TodoTableItem";

export default function TodoTable({
  todo,
  listType,
  completeTodo,
  deleteTodo,
}) {
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
    <table class="table table-dark table-striped table-hover shadow">
      <thead>
        <tr>
          <th scope="col" className="col-2 text-center">Completion</th>
          <th scope="col" className="text-center">Task</th>
          <th scope="col" className="col-2 text-center">Delete</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        {filteredTodos.map((item) => (
        <TodoTableItem
          key={item.id}
          item={item}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      </tbody>
    </table>
  );
}
