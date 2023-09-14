import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 15px;

  .header {
    &__title {
      font-size: 24px;
      color: ${(prop) => prop.theme.color.darkBlue};
    }

    &__subtitle {
      font-size: 16px;
      color: ${(prop) => prop.theme.color.areaBlue};
    }
  }
`;

export default HeaderStyled;
