import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'SkyQuest'", () => {
      const expextedHeading = "SkyQuest";

      renderWithProviders(<Header />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expextedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
