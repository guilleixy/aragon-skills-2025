import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

it("should have Nav text", () => {
  render(<HomePage />); // ARRANGE
  const myElem = screen.getByText("Inicio"); // ACT
  expect(myElem).toBeInTheDocument();
});
