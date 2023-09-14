import React from "react";

export default function TodoItem({ item, completeTodo, deleteTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed} 
        onChange={() => completeTodo(item.id)}
      />
      {item.text}
      <button onClick={() => deleteTodo(item.id)}>X</button>
    </li>
  );
}
