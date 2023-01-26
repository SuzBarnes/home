import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test("renders Home", () => {
  render(<Home />);
  const home = screen.getByText(/Hello/i);
  expect(home).toBeInTheDocument();
});
