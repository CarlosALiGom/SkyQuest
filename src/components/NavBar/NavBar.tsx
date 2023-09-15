import { useLocation } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <NavBarStyled>
      <ul className="navBar__list">
        <li>
          {pathname === "/home" ? (
            <>
              <div className="navBar__img">
                <img
                  src="./img/discActive.svg"
                  alt="disc icon"
                  width={24}
                  height={24}
                />
                <img src="./img/elipse.svg" alt="elipse" width={3} height={3} />
              </div>
            </>
          ) : (
            <img src="./img/disc.svg" alt="disc icon" width={24} height={24} />
          )}
        </li>
        <li>
          {pathname === "/weather" ? (
            <>
              <div className="navBar__img">
                <img
                  src="./img/cloudActive.svg"
                  alt="disc icon"
                  width={24}
                  height={24}
                />
                <img src="./img/elipse.svg" alt="elipse" width={3} height={3} />
              </div>
            </>
          ) : (
            <img src="./img/cloud.svg" alt="disc icon" width={24} height={24} />
          )}
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
