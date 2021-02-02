import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "../404";
import About from "../About";
import Home from "../Home";
import Navbar from "../Navbar";
import Users from "../Users";

const Routeur = () => (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
            <NoMatch />
        </Route>
      </Switch>
  </Router>
);

export default Routeur;