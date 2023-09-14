import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <h1 className="header__title">SkyQuest</h1>
      <h2 className="header__subtitle">Where do you want to go?</h2>
    </HeaderStyled>
  );
};

export default Header;
