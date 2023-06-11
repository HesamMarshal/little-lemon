import Logo from "../images/logo.svg";

const Navigation = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" />

      <ul>
        <li>
          <a href="#" className="App-link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="App-link">
            About
          </a>
        </li>
        <li>
          <a href="#" className="App-link">
            Menu
          </a>
        </li>
        <li>
          <a href="#" className="App-link">
            Reservation
          </a>
        </li>
        <li>
          <a href="#" className="App-link">
            Order Online
          </a>
        </li>
        <li>
          <a href="#" className="App-link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
