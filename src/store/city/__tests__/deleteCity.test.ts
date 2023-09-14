import {
  cityReducer,
  deleteCityActionCreator,
  initialCityState,
} from "../citySlice";

describe("Given a deleteCity reducer", () => {
  describe("When it receives an initial state with a city and cords and an action", () => {
    test("Then it should show an empty city state", () => {
      const cityState = {
        city: "Barcelona",
        cords: {
          lat: "10.256154",
          lng: "45.256482",
        },
      };

      const expectedCityState = initialCityState;

      const deleteCityAction = deleteCityActionCreator();

      const newCityState = cityReducer(cityState, deleteCityAction);

      expect(expectedCityState).toStrictEqual(newCityState);
    });
  });
});
