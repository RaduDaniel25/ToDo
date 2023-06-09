import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./context/tasks";
const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
