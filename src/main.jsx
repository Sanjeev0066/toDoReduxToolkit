import { h, render } from "preact";
import { App } from "./app.jsx";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { store } from "./components/store.js";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
