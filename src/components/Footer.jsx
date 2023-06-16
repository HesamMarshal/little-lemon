import logo from "../images/logo2.svg";
const Footer = () => {
  return (
    <footer className="container">
      <img src={logo} alt="Logo" />
      <ul>
        <h3>Doormat Navigation</h3>
        <li>
          <a href="./" className="App-link">
            Home
          </a>
        </li>
        <li>
          <a href="./" className="App-link">
            About
          </a>
        </li>
        <li>
          <a href="./" className="App-link">
            Menu
          </a>
        </li>
        <li>
          <a href="./" className="App-link">
            Reservations
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
      <ul>
        <h3>Contact</h3>
        <li>
          <a href="./" className="App-link">
            Address
          </a>
        </li>
        <li>
          <a href="./" className="App-link">
            Phone Number
          </a>
        </li>
        <li>
          <a href="./" className="App-link">
            Email
          </a>
        </li>
      </ul>
      <ul>
        <h3>Social Media Links</h3>
        <li>
          <a href="./" className="App-link">
            Address
          </a>
        </li>
        <li>
          <a href="./" className="App-link">
            Phone Number
          </a>
        </li>
        <li>
          <a href="./" className="App-link">
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
