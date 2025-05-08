import { render, screen } from "../testing-utils";
import LoginPage from "@/app/login/page";
import { mockFetch } from "../testing-utils/mock-fetch";
import "@testing-library/jest-dom";

it("should have Nav text", () => {
  let someJson;
  window.fetch = mockFetch(someJson);
  render(<LoginPage />); // ARRANGE
  const myElem = screen.getByText("Inicio de sesión"); // ACT
  expect(myElem).toBeInTheDocument(); // ASSERT
});
