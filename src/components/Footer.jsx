import logo from "../images/small_logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer container">
        <article className="imageContainer">
          <img src={logo} alt="Logo" className="small-logo" />
        </article>
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
          <li>2548 Matthews Street, Chicago, Illinois - 60631</li>
          <li>+1 0123456789</li>
          <li>
            <a mailto="info@LittleLemon.com" className="App-link">
              info@LittleLemon.com
            </a>
          </li>
        </ul>
        <ul>
          {/* TODO: Add Social Media Icons */}
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
      </div>
    </footer>
  );
};

export default Footer;
