import { useState } from "react";

import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm";
import Todos from "./components/Todos";
export function App() {
  const [count, setCount] = useState(5);

  return (
    <>
      <UserForm />
      <Todos />
    </>
  );
}
