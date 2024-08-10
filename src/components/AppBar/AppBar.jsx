// src/components/AppBar/AppBar.jsx
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <p>{user.name}</p>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default AppBar;
