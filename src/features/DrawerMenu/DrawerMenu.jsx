import { Link } from "react-router-dom";
import "./drawerMenu.style.css";
import iconSearch from "../../assets/iconSearch.png";
import iconUser from "../../assets/iconUser.png";

const DrawerMenu = ({ isOpen }) => {
  return (
    <div
      className={`drawer-menu ${
        isOpen ? "drawer-menu-open" : "drawer-menu-close"
      }`}
    >
      <div className="drawer-menu-search">
        <img src={iconSearch} alt="Icon Search" width="13px" />
        <input placeholder="Find a category" />
      </div>
      <div className="nav-links-drawer">
        <ul>
          <li className={location.pathname === "/" ? "active-link-drawer" : ""}>
            <Link to={{ pathname: "/" }}>Home</Link>
          </li>

          <li
            className={
              location.pathname === "/games" ? "active-link-drawer" : ""
            }
          >
            <Link to={{ pathname: "/games" }}>Games</Link>
          </li>

          <li
            className={
              location.pathname === "/deals" ? "active-link-drawer" : ""
            }
          >
            <Link to={{ pathname: "/deals" }}>Deals</Link>
          </li>

          <li
            className={
              location.pathname === "/community" ? "active-link-drawer" : ""
            }
          >
            <Link to={{ pathname: "/community" }}>Community</Link>
          </li>

          <li
            className={
              location.pathname === "/about" ? "active-link-drawer" : ""
            }
          >
            <Link to={{ pathname: "/about" }}>About</Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className="user-drawer">
        <div className="user-information-drawer">
          <h4>LOG IN</h4>
          <p>Need an account?</p>
        </div>
        <img src={iconUser} alt="GameStore Logo" width="35px" />
      </div>
    </div>
  );
};

export default DrawerMenu;
