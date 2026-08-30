import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio introduction", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      name: /hello! in english, japanese, and chinese/i,
    })
  ).toBeInTheDocument();
});
