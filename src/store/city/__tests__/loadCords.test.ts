import {
  cityReducer,
  initialCityState,
  loadCordsActionCreator,
} from "../citySlice";
import { CityStateStructure } from "../types";

describe("Given a loadCords reducer", () => {
  describe("When it receives a current state and a payload with a new cords", () => {
    test("Then it should show a new state with the new cords", () => {
      const newCords = {
        lat: "10.256154",
        lon: "45.256482",
      };

      const expectedCityState: CityStateStructure = {
        city: "",
        cords: newCords,
      };

      const loadCordsAction = loadCordsActionCreator(newCords);

      const newCityState = cityReducer(initialCityState, loadCordsAction);

      expect(expectedCityState).toStrictEqual(newCityState);
    });
  });
});
