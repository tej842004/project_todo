import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TodosProvider } from "./context/TodoContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TodosProvider>
        <App />
      </TodosProvider>
    </AuthProvider>
  </React.StrictMode>
);
