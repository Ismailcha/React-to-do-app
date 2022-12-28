import React, { useState } from "react";

export default function Addtodo() {
  const [todo, settodo] = useState({ id: "0", value: "" });
  function submitTodo(e) {}
  return (
    <form>
      <input
        type="text"
        className="input-todo"
        placeholder="What do you need to do ?"
      ></input>
      <button className="btn-add" onClick={submitTodo}>
        Add
      </button>
    </form>
  );
}
