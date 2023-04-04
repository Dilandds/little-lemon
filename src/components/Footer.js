import Logo from "../asserts/images/Logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={Logo}></img>
      <div>
        <h1>Navigation</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <h1>Contact</h1>
        <ul>
          <li>Address</li>
          <li>Phone</li>
          <li>Email</li>
        </ul>
      </div>
      <div>
        <h1>Social Medial Links</h1>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Linkdine</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
