import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // generating values for keys

export default function Addtodo() {
  const [todos, setTodo] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [input, setInput] = useState();
  const [message, setMessage] = useState("What task you have to do ?");
  // click to add todo item to the list
  function handleClick() {
    if (input.trim().length === 0) {
      setMessage("please fill the input with your task");
    } else {
      const id = todos.length + 1; // id of each item to get keys and put number of Todo
      setTodo((prevState) => [
        ...prevState,
        {
          // adding item for OUR 'TO DO LIST'
          id: id,
          taskName: input,
        },
      ]);
      setMessage("do you have some other To Do's ? ADD IT");
      setInput(""); // empty the input
    }
  }
  function deleteToDo(id) {
    setTodo((prevState) => {
      // delete toDo clicked
      return prevState.filter((todo) => todo.id !== id);
    });
  }
  const enterToAdd = (e) => {
    if (e.keyCode === 13) {
      handleClick(); // press enter to add toDo
    }
  };
  // local storage function
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  return (
    <div className="flex">
      <h3>{message}</h3>
      <div className="input_todo">
        <input
          type="text"
          name="todo"
          value={input || ""}
          onInput={(e) => {
            setInput(e.target.value); // to let the user write inside the input
          }}
          onKeyDown={enterToAdd}
        />
        <button className="btn-add" onClick={handleClick}>
          &#8330;
        </button>
      </div>

      <div className="todos">
        <ul>
          {todos.map((todo) => {
            // return each item when add button is clicked
            return (
              <div
                className="todolist-item"
                key={uuidv4()}
                onClick={() => deleteToDo(todo.id)}
              >
                <li>
                  <span>&#128204;</span>
                  {todo.taskName}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
