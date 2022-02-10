import { Router, Redirect } from "@reach/router";

import ListConsumers from "components/consumers-list";

import "./app.css";

const App = () => {
  return (
    <Router>
      <Redirect from="/" to="/consumers-list" noThrow />
      <ListConsumers key={1} path="/consumers-list" />
    </Router>
  );
};

export default App;
