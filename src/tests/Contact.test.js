import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

test("renders Contact Me", () => {
  render(<Contact />);
  const contactMe = screen.getByText(/Contact/i);
  expect(contactMe).toBeInTheDocument();
});
