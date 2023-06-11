import Logo from "../images/Logo.svg";

const Navigation = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <Navigation />
      <ul>
        <li>Home</li>
      </ul>
    </nav>
  );
};

export default Navigation;
