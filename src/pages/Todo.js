import React from "react";

export default function Todo() {
  return (
    <div className="mx-auto col-6 d-flex flex-column ">
      {/* Todo List */}
      <h1 className="mx-auto">Todo List</h1>
      <ul className="mx-auto">
        <li>stuff</li>
      </ul>
      {/* Input */}
      <div class="input-group mb-3">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder="Username"
          />
          <label for="floatingInputGroup1">Todo Item</label>
        </div>
        <button type="button" class="btn btn-outline-primary">
          Submit
        </button>
        {/* <span class="input-group-text">Submit</span> */}
      </div>
      {/* buttons */}
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
