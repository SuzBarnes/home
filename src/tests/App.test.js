import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

test("renders Hello World", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const helloWorld = screen.getByText(/Contact/i);
  expect(helloWorld).toBeInTheDocument();
});
