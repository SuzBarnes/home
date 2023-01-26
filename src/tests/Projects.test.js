import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";

test("renders projects", () => {
  render(<Projects />);
  const projects = screen.getByText(/Projects/i);
  expect(projects).toBeInTheDocument();
});
