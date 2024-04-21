import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
useContext;

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};


