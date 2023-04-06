import navLogo from "./Assets/imgs/Logo.svg";

const Nav = () => {
  const mystyle = {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
  };

  const listStyle = {
    listStyleType: "None",
    display: "flex",
    gap: "10px",
    marginRight: "20px",
  };

  const listItem = {
    textDecoration: "None",
    color: "Black",
    fontWeight: "Bold",
  };

  const imageStyle = {
    marginRight: "auto",
  };

  return (
    <nav style={mystyle}>
      <img src={navLogo} style={imageStyle}></img>
      <ul style={listStyle}>
        <li>
          <a href="#" style={listItem}>
            HOME
          </a>
        </li>
        <li>
          <a href="#" style={listItem}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#" style={listItem}>
            MENU
          </a>
        </li>
        <li>
          <a href="#" style={listItem}>
            RESERVATIONS
          </a>
        </li>
        <li>
          <a href="#" style={listItem}>
            ORDER ONLINE
          </a>
        </li>
        <li>
          <a href="#" style={listItem}>
            LOGIN
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
