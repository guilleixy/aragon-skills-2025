"use client";

import { useState, useEffect } from "react";
import { Button, TextInput, Loader, Table } from "@mantine/core";

export default function ContestantsTable() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [escuela, setEscuela] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [position, setPosition] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const fetchResults = async () => {
    setLoading(true);

    const params = new URLSearchParams();

    if (name) params.append("name", name.toUpperCase());
    if (year) params.append("year", year.toUpperCase());
    if (escuela) params.append("escuela", escuela.toUpperCase());
    if (especialidad) params.append("especialidad", especialidad.toUpperCase());
    if (position) params.append("position", position.toUpperCase());

    const res = await fetch(`/api/results?${params}`);
    const data = await res.json();

    setResults(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <section
      id="table"
      style={{ display: "block", height: "100%", marginTop: "200vh" }}
    >
      <h1>Ganadores</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "5rem",
        }}
      >
        <TextInput
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <TextInput
          label="Año"
          value={year}
          onChange={(e) => setYear(e.currentTarget.value)}
          color="danger"
        />
        <TextInput
          label="Escuela"
          value={escuela}
          onChange={(e) => setEscuela(e.currentTarget.value)}
        />
        <TextInput
          label="Especialidad"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.currentTarget.value)}
        />
        <TextInput
          label="Posición"
          value={position}
          onChange={(e) => setPosition(e.currentTarget.value)}
        />
        <Button
          style={{ marginTop: "25px" }}
          onClick={fetchResults}
          color="black"
        >
          Buscar
        </Button>
      </div>

      {loading ? (
        <Loader mt="lg" />
      ) : (
        <Table mt="lg" highlightOnHover striped>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Escuela</th>
              <th>Especialidad</th>
              <th>Año</th>
              <th>Posición</th>
            </tr>
          </thead>
          <tbody>
            {results.map((res, key) => (
              <tr
                key={key}
                style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
              >
                <td>{res.competidor.name}</td>
                <td>{res.competidor.escuela.name}</td>
                <td>{res.competidor.especialidad.name}</td>
                <td>{res.edicion.year}</td>
                <td>{res.position}</td>
                {/*                 <td>
                  <Button color="black" onClick={() => console.log("a")}>
                    Borrar
                  </Button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </section>
  );
}
