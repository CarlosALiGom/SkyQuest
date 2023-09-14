import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";

const Layout = (): React.ReactElement => {
  return (
    <>
      <ContainerStyled>
        <Header />
        <SearchBar />
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
