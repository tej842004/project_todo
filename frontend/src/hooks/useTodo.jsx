import { useContext } from "react";
import { TodosContext } from "../context/TodoContext";
useContext;

export const useTodo = () => {
  const context = useContext(TodosContext);
  return context;
};
