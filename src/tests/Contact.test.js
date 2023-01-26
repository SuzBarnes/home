import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

test("renders Contact Me", () => {
  render(<Contact />);
  const contactMe = screen.getByText(/Contact Me/i);
  expect(contactMe).toBeInTheDocument();
});
