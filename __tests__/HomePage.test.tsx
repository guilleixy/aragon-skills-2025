import { render, screen } from "../testing-utils";
import HomePage from "@/app/page";
import { mockFetch } from "../testing-utils/mock-fetch";
import { act } from "react";

const results = [
  {
    competidorId: 1,
    edicionId: 1,
    position: "BRONCE",
    competidor: {
      id: 1,
      name: "JORGE BERDOY GARCÍA",
      escuelaId: 1,
      especialidadId: 1,
      escuela: {
        id: 1,
        name: 'SALESIANOS ""NTRA. SRA. DEL PILAR',
      },
      especialidad: {
        id: 1,
        name: "04. MECATRÓNICA",
      },
    },
    edicion: {
      id: 1,
      year: "2021",
    },
  },
];

it("should have Nav text", async () => {
  window.fetch = mockFetch(results);
  const component = render(<HomePage />);
  await act(async () => {
    results;
  });
  render(<HomePage />); // ARRANGE
  const myElem = screen.getByText("Aragon Skills"); // ACT
  expect(myElem).toBeInTheDocument(); // ASSERT
});
