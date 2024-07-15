import "./navigation.style.css";
import logoOfGameStore from "../../assets/logoOfGameStore.png";
import iconShoppingBasket from "../../assets/iconShoppingBasket.png";
import iconUser from "../../assets/iconUser.png";
import iconSearch from "../../assets/iconSearch.png";
import iconHamburgerMenu from "../../assets/menuHamburger.png";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DrawerMenu from "../DrawerMenu/DrawerMenu";

const Navigation = () => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="navigation">
      <div className="logo-container">
        <Link to={{ pathname: "/" }}>
          <img src={logoOfGameStore} alt="GameStore Logo" width="30px" />
        </Link>
      </div>
      <div className="nav-links">
        <Link
          to={{ pathname: "/" }}
          className={location.pathname === "/" ? "active-link" : ""}
        >
          Home
        </Link>
        <Link
          to={{ pathname: "/games" }}
          className={location.pathname === "/games" ? "active-link" : ""}
        >
          Games
        </Link>
        <Link
          to={{ pathname: "/deals" }}
          className={location.pathname === "/deals" ? "active-link" : ""}
        >
          Deals
        </Link>
        <Link
          to={{ pathname: "/community" }}
          className={location.pathname === "/community" ? "active-link" : ""}
        >
          Community
        </Link>
        <Link
          to={{ pathname: "/about" }}
          className={location.pathname === "/about" ? "active-link" : ""}
        >
          About
        </Link>
      </div>
      <div className="nav-icons">
        <img src={iconUser} alt="Icon User" width="16px" />
        <div className="shopping-basket">
          <img
            src={iconShoppingBasket}
            alt="Icon Shopping Basket"
            width="19px"
          />
          <span>0</span>
        </div>
        <img src={iconSearch} alt="Icon Search" width="16px" />
        <img
          src={iconHamburgerMenu}
          alt="Icon Hamburger Menu"
          width="16px"
          onClick={toggleDrawer}
        />
      </div>
      <DrawerMenu isOpen={isDrawerOpen} />
    </div>
  );
};

export default Navigation;
