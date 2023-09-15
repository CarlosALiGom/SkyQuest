import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import { useAppSelector } from "../../store";
import NavBar from "../NavBar/NavBar";

const Layout = (): React.ReactElement => {
  const cords = useAppSelector((state) => state.city.cords);

  return (
    <>
      <ContainerStyled>
        <Header />
        <SearchBar />
        <Outlet />
        {cords.lat !== "" && <NavBar />}
      </ContainerStyled>
    </>
  );
};

export default Layout;
