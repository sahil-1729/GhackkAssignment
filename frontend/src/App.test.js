import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders pricing plans", async () => {
  render(<App />);
  expect(screen.getByText(/Pricing Plans/i)).toBeInTheDocument();
});
