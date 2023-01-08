import React, { useState } from "react";

export default function Addtodo() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState();
  const [message, setMessage] = useState("What task you have to do ?");
  function handleClick() {
    if (input.trim().length === 0) {
      setMessage("please fill the input with your task");
    } else {
      const id = todos.length + 1; // id of each item to get keys
      setTodo((prevState) => [
        ...prevState,
        {
          // adding item for OUR 'TO DO LIST'
          id: id,
          taskName: input,
          completed: false,
        },
      ]);
      setInput(""); // empty the enput
    }
  }
  return (
    <div>
      <h3>{message}</h3>
      <div className="input_todo">
        <textarea
          type="text"
          name="todo"
          value={input}
          onInput={(e) => {
            setInput(e.target.value); // to let the user write inside the input
          }}
        />
        <button className="btn-add" onClick={handleClick}>
          Add
        </button>
      </div>

      <div className="todos">
        <ol>
          {todos.map((todo) => {
            // return each item when add button is clicked
            return (
              <div className="todolist-item">
                <li key={todo.id}>{todo.taskName}</li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
