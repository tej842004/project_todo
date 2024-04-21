import { useAuth } from "../hooks/useAuth";
import { useTodo } from "../hooks/useTodo";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TodoDetails = ({ todo }) => {
  const { user } = useAuth();
  const { dispatch } = useTodo();

  const handleDelete = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("http://localhost:3000/api/todo/" + todo._id, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_TODO", payload: json });
    }
  };

  return (
    <div className="todo-details">
      <h4>{todo.text}</h4>
      <p>
        {formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleDelete} className="material-symbols-outlined">
        Delete
      </span>
    </div>
  );
};

export default TodoDetails;
