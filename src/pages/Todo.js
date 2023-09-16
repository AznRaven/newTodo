import React, { useState, useEffect } from "react";
import Btn from "../components/Btn";
import TodoList from "./TodoList";
import TodoTable from "./TodoTable";

export default function Todo() {
  // Initialize todo from local storage or an empty array
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
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
  const filteredTodo =
    listType === "completed"
      ? todo.filter((item) => item.completed)
      : listType === "incomplete"
      ? todo.filter((item) => !item.completed)
      : todo;

  return (
    <div className="container-fluid center ">
      <div className="center row col-12 col-sm-10 col-md-10 ">
        <div className="center mt-3">
          {/* Todo List */}
          {/* <h1 className="mx-auto">Todo List</h1>
      <TodoList
        todo={todo}
        listType={listType}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      /> */}
          <h1 className="text-center">Todo Table</h1>
          <div
            className="btn-group shadow"
            role="group"
            aria-label="Basic example"
          >
            <Btn
              color="primary"
              text="All"
              setListType={() => setListType("all")}
            />
            <Btn
              color="success"
              text="Completed"
              setListType={() => setListType("completed")}
            />
            <Btn
              color="secondary"
              text="Incomplete"
              setListType={() => setListType("incomplete")}
            />
          </div>
          <br />
          {/* Table */}
          <TodoTable
            todo={todo}
            listType={listType}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
          {/* Input */}
          <div className="input-group mb-3 shadow">
            <div className="form-floating">
              <input
                value={input}
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="Todo Item"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addToList();
                  }
                }}
              />
              <label htmlFor="floatingInputGroup1">Todo Item</label>
            </div>
            <button
              type="button"
              onClick={addToList}
              className="btn btn-outline-dark"
            >
              Submit
            </button>
          </div>
          {/* Buttons to filter todos */}
          <div
            className="btn-group shadow"
            role="group"
            aria-label="Basic example"
          >
            <Btn
              color="primary"
              text="All"
              setListType={() => setListType("all")}
            />
            <Btn
              color="success"
              text="Completed"
              setListType={() => setListType("completed")}
            />
            <Btn
              color="secondary"
              text="Incomplete"
              setListType={() => setListType("incomplete")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
