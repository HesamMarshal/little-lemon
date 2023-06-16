import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="App-link">
            Home
          </Link>
        </li>
        <li>
          <a href="/#about" className="App-link">
            About
          </a>
        </li>
        <li>
          <a href="./" className="App-link">
            Menu
          </a>
        </li>
        <li>
          <a href="/booking" className="App-link">
            Reservation
          </a>
        </li>
        <li>
          <a href="./" className="App-link">
            Order Online
          </a>
        </li>
        <li>
          <a href="./" className="App-link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
