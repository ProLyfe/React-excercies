import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Navbar from './components/Navbar';
import Routeur from "./components/Route/Routeur";
import NoMatch from "./components/404";

const App = () => {

return (
  <>
    <Routeur />
    <NoMatch />
  </>
  );
}

export default App;
