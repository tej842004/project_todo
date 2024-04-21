import { useTodo } from "./useTodo";
import { useAuth } from "./useAuth";

export const useLogout = () => {
  const { dispatch } = useAuth();
  const { dispatch: todoDispatch } = useTodo();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    todoDispatch({ type: "SET_TODOS", payload: null });
  };

  return { logout };
};
