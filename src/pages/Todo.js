import React from "react";

export default function Todo() {
  return (
    <div className="mx-auto col-10">
      <h1>Todo List</h1>
      <ul>
        <li>stuff</li>
      </ul>
      <div class="input-group mb-3 border border-danger">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder="Username"
          />
          <label for="floatingInputGroup1">Username</label>
        </div>
        <span class="input-group-text">Submit</span>
      </div>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-primary">
          All
        </button>
        <button type="button" class="btn btn-outline-success">
          Completed
        </button>
        <button type="button" class="btn btn-outline-warning">
          Incomplete
        </button>
      </div>
    </div>
  );
}
