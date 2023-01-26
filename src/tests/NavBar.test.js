import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

test("renders Navbar", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const navBar = screen.getByText(/Blog/i);
  expect(navBar).toBeInTheDocument();
});
