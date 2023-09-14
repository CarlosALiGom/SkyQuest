import {
  cityReducer,
  initialCityState,
  loadCityActionCreator,
} from "../citySlice";
import { CityStateStructure } from "../types";

describe("Given a load reducer", () => {
  describe("When it receives a current state with a string and a payload with a new city string", () => {
    test("Then it should show a new state with the new city string", () => {
      const newCity = "Barcelona";

      const expectedCityState: CityStateStructure = {
        city: newCity,
        cords: {
          lat: "",
          lng: "",
        },
      };

      const loadCityAction = loadCityActionCreator(newCity);

      const newCityState = cityReducer(initialCityState, loadCityAction);

      expect(expectedCityState).toStrictEqual(newCityState);
    });
  });
});
