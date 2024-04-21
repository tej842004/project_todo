import { createContext, useReducer } from "react";

export const TodosContext = createContext();

export const TodosReducer = (state, action) => {
  if (action.type === "SET_TODOS") {
    return { todos: action.payload };
  }
  if (action.type === "CREATE_TODO") {
    return { todos: [action.payload, ...state.todos] };
  }
  if (action.type === "DELETE_TODO") {
    return {
      todos: state.todos.filter((todo) => todo._id !== action.payload._id),
    };
  }
  return state;
};

export const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodosReducer, { todos: null });

  return (
    <TodosContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
