import styled from "styled-components";

const EmptyMapStyled = styled.div`
  display: flex;
  background-color: ${(prop) => prop.theme.color.lightBlue};
  margin-top: 15px;
  width: 345px;
  height: 180px;
  border-radius: 0.5rem;
  align-items: center;

  .emptyMap {
    &__paragraph {
      font-size: 1rem;
      color: ${(prop) => prop.theme.color.darkBlue};
      margin: 0 auto;
    }
  }
`;

export default EmptyMapStyled;
