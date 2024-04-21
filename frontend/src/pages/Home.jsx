import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import TodoDetails from "../components/TodoDetails";
import TodoForm from "../components/TodoForm";
import { useTodo } from "../hooks/useTodo";

const Home = () => {
  const { user } = useAuth();
  const { todos, dispatch } = useTodo();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://project-todo-n9sb.onrender.com/api/todo",
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TODOS", payload: json });
      }
    };

    if (user) {
      fetchTodos();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="workouts">
        {todos &&
          todos.map((todo, index) => (
            <TodoDetails key={todo._id} todo={todo} />
          ))}
      </div>
      <TodoForm />
    </div>
  );
};

export default Home;
