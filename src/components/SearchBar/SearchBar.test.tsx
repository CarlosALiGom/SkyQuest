import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import SearchBar from "./SearchBar";

describe("Given a SearchBar component", () => {
  const expectedplaceholderText = "Ej: Barcelona";
  describe("When its rendered", () => {
    test("Then it should show an input with a placeholder text 'Ej: Barcelona'", () => {
      renderWithProviders(<SearchBar />);

      const placeholderText = screen.getByPlaceholderText(
        expectedplaceholderText,
      );

      expect(placeholderText).toBeInTheDocument();
    });
  });

  describe("When its rendered and the user writes a city and click the delete button", () => {
    test("Then the input state should be empty again", async () => {
      const typedCity = "New York";
      const deleteButtonAltText = "delete";
      const expectedInputValue = "";

      renderWithProviders(<SearchBar />);

      const searchBarInput = screen.getByPlaceholderText(
        expectedplaceholderText,
      );

      await userEvent.type(searchBarInput, typedCity);

      const deleteButton = screen.getByAltText(deleteButtonAltText);

      await userEvent.click(deleteButton);

      expect(searchBarInput).toHaveValue(expectedInputValue);
    });
  });
});
