import { useAuth } from "../hooks/useAuth";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user } = useAuth();
  const { logout } = useLogout();
  const handleClick = async () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Your Todo</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Logout</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
