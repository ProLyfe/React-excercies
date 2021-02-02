import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
            <Link to="/also/will/not/match">Also Will Not Match</Link>
        </li>
      </ul>
    </nav>
);

export default Navbar;