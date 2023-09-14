import { useState } from "react";
import SearchBarStyled from "./SearchBarStyled";
import { useAppDispatch } from "../../store";
import {
  deleteCityActionCreator,
  loadCityActionCreator,
} from "../../store/city/citySlice";

const SearchBar = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const [city, setCity] = useState("");

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loadCityActionCreator(city));
  };

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const deleteCityonClick = () => {
    dispatch(deleteCityActionCreator());
    setCity("");
  };

  return (
    <SearchBarStyled className="form" autoComplete="off" onSubmit={handleForm}>
      <label htmlFor="city" className="form__label">
        Search a city
      </label>
      <div className="form__control">
        <button
          className="form__button"
          type="button"
          onClick={deleteCityonClick}
        >
          <img src="./delete.svg" alt="delete" height={28} width={28} />
        </button>
        <input
          type="text"
          id="city"
          className="form__input"
          value={city}
          onChange={onChangeData}
          placeholder="Ej: Barcelona"
        />
        <button type="submit" className="form__button">
          <img src="./favicon.svg" alt="magnifier" height={28} width={28} />
        </button>
      </div>
    </SearchBarStyled>
  );
};

export default SearchBar;
