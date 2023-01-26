import { render, screen } from "@testing-library/react";
import Blog from "../components/Blog";

test("renders Blog", () => {
  render(<Blog />);
  const blog = screen.getByText(/follow my journey/i);
  expect(blog).toBeInTheDocument();
});
