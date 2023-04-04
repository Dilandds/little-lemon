import Logo from "../asserts/images/Logo.svg";
import design from "./Nav.css";

const Nav = () => {
  return (
    <header>
      <img src={Logo}></img>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li clasName="last">Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
