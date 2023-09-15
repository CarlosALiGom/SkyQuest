import styled from "styled-components";

const NavBarStyled = styled.nav`
  @keyframes example {
    0% {
      bottom: -100px;
    }
    10% {
      bottom: -90px;
    }
    20% {
      bottom: -80px;
    }
    30% {
      bottom: -70px;
    }
    40% {
      bottom: -60px;
    }
    50% {
      bottom: -50px;
    }
    60% {
      bottom: -40px;
    }
    70% {
      bottom: -30px;
    }
    80% {
      bottom: -20px;
    }
    90% {
      bottom: -10px;
    }
    100% {
      bottom: 0px;
    }
  }

  animation-name: example;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 1rem;
  width: 100%;
  height: 83px;
  border-top: 2px solid ${(prop) => prop.theme.color.midBlue};

  .navBar {
    &__list {
      display: flex;
      width: 100vw;
      justify-content: center;
      justify-content: space-around;
    }

    &__img {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
  }
`;

export default NavBarStyled;
