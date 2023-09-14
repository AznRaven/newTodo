import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

export default function Todo() {
  // Initialize todo from local storage or an empty array
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo")) || []);
  const [input, setInput] = useState("");
  const [listType, setListType] = useState("all");

  // Save todo to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  function addToList() {
    if (input.trim() === "") return; // Don't add empty todos

    const newItem = {
      text: input,
      completed: false,
      id: crypto.randomUUID(),
    };

    setTodo([...todo, newItem]);
    setInput("");
  }

  function deleteTodo(id) {
    const newTodo = todo.filter((x) => x.id !== id);
    setTodo(newTodo);
  }

  function completeTodo(id) {
    const newTodo = todo.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodo(newTodo);
  }

  // Filter the todo list based on the selected listType
  const filteredTodo = listType === "completed"
    ? todo.filter((item) => item.completed)
    : listType === "incomplete"
    ? todo.filter((item) => !item.completed)
    : todo;

  return (
    <div className="mx-auto col-6 d-flex flex-column ">
      {/* Todo List */}
      <h1 className="mx-auto">Todo List</h1>
      <TodoList
        todo={todo}
        listType={listType}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      {/* Input */}
      <div className="input-group mb-3">
        <div className="form-floating">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="form-control"
            id="floatingInputGroup1"
            placeholder="Todo Item"
          />
          <label htmlFor="floatingInputGroup1">Todo Item</label>
        </div>
        <button
          type="button"
          onClick={addToList}
          className="btn btn-outline-primary"
        >
          Submit
        </button>
      </div>
      {/* Buttons to filter todos */}
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setListType("all")}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => setListType("completed")}
        >
          Completed
        </button>
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => setListType("incomplete")}
        >
          Incomplete
        </button>
      </div>
    </div>
  );
}
