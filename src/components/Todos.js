import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoslice";
export default function Todos() {
  const toIterate = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (!Array.isArray(toIterate)) {
    return <p>No todos available.</p>;
  }
  return (
    <div>
      <h2>List Of ToDo</h2>
      <div>
        {toIterate.map((todo) => (
          <Container>
            <li key={todo.id}>
              {todo.text}
              <button
                className="delete"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <i class="bi bi-x">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </i>
              </button>
            </li>
          </Container>
        ))}
      </div>
    </div>
  );
}
