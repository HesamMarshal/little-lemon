import Navigation from "./Navigation";
import Logo from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header container">
        <img src={Logo} alt="logo" className="logo" />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
