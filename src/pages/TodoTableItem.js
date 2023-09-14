import React from "react";

export default function TodoTableItem({ item, completeTodo, deleteTodo }) {
  return (
    <tr className="">
      <td scope="row" className="text-center">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => completeTodo(item.id)}
        />
      </td>
      <td>{item.text}</td>
      
      <td  className="text-center">
        <button
          onClick={() => deleteTodo(item.id)}
          className="btn btn-danger btn-sm"
        >
          X
        </button>
      </td>
    </tr>
  );
}
