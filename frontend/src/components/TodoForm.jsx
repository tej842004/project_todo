import { useAuth } from "../hooks/useAuth";
import React, { useState } from "react";
import { useTodo } from "../hooks/useTodo";

const TodoForm = () => {
  const { user } = useAuth();
  const { dispatch } = useTodo();
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const todo = { text };

    const response = await fetch("https://project-todo-n9sb.onrender.com/api/todo", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setText("");
      dispatch({ type: "CREATE_TODO", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Todo</h3>

      <label>Todo Text:</label>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <button>Add Todo</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TodoForm;
