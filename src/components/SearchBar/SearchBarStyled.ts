import styled from "styled-components";

const SearchBarStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 15px;
  gap: 15px;

  .form {
    &__label {
      color: ${(prop) => prop.theme.color.lightText};
    }

    &__control {
      display: flex;
      gap: 1rem;
    }

    &__input {
      background-color: ${(prop) => prop.theme.color.lightBlue};
      color: ${(prop) => prop.theme.color.darkBlue};
      border-radius: 0.5rem;
      outline: 0;
      height: 2.5rem;
      width: 200px;
      padding: 0.5rem;
      padding-left: 0.75rem;
      font-size: 1rem;

      &::placeholder {
        color: ${(prop) => prop.theme.color.darkBlue};
      }
    }

    &__button {
      height: 2.5rem;
      width: 2.5rem;
      background-color: transparent;
      padding-top: 4px;
      border-radius: 0.5rem;
      font-size: 1rem;
    }
  }
`;

export default SearchBarStyled;
