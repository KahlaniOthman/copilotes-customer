import { Router, Redirect, navigate } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";

import { signIn, logout } from "actions/userActions";
import { addTodo } from "actions/todoActions";

import TopBar from "components/top-bar";
import Welcome from "components/welcome";
import LoginForm from "components/login-form";
import TodoPage from "components/to-do-page";
import Demo from 'components/demo'

import "./App.css";

const App = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const userLogIn = (userData) => {
    dispatch(signIn(userData));
    navigate("/welcome");
  };

  const handleRedirection = () => {
    if (!userInfo) {
      // redirect to log in
      navigate("/login");
    } else {
      // dispatch action 'clear user info' to log out
      dispatch(logout());
      // clear to do list from global state
      dispatch(addTodo([]));
      navigate("/welcome");
    }
  };

  return (
    <div className="to-do-app">
      <TopBar
        handleRedirection={handleRedirection}
        userInfo={userInfo}
        location={window.location}
        redirectToWelcomePage={() => navigate("/welcome")}
      />
      <div className="main">
        <Router>
          <Redirect from="/" to={"/welcome"} noThrow />
          <Welcome key={1} path="/welcome" />
          <LoginForm key={2} path="/login" handleConnexion={userLogIn} />
          <TodoPage key={3} path="/todo" />
          <Demo key={4} path="/demo" />
        </Router>
      </div>
    </div>
  );
};

export default App;
