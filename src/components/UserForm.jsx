import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoslice";
export default function UserForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandeler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="col my-4">
            <input
              type="text"
              className="form-control"
              placeholder="add to do"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <button class="submit" onClick={addTodoHandeler}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
