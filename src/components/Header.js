import Navigation from "./Navigation";
import Logo from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" className="logo" />
      <Navigation />
    </header>
  );
};

export default Header;
