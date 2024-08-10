import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import ContactsPage from "../pages/ContactsPage";
import Layout from "../components/Layout/Layout";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "../components/RestrictedRoute/RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={<RestrictedRoute component={RegistrationPage} />}
          />
          <Route
            path="login"
            element={<RestrictedRoute component={LoginPage} />}
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={ContactsPage} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
