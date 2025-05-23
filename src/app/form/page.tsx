"use client";
import { useForm } from "@mantine/form";
import { Button, Checkbox, Group, TextInput, Select } from "@mantine/core";
import { useState, useEffect } from "react";

export default function FormPage() {
  const [escuelaOptions, setEscuelaOptions] = useState([]);
  const [especialidadOptions, setEspecialidadOptions] = useState([]);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {},

    validate: {},
  });

  const handleSubmit = async (values: any) => {
    console.log(JSON.stringify(values));
    const response = await fetch("api/results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [escuelaResponse, especialidadResponse] = await Promise.all([
          fetch("/api/escuela"),
          fetch("/api/especialidad"),
        ]);

        if (escuelaResponse.ok) {
          const escuelaData = await escuelaResponse.json();
          setEscuelaOptions(
            escuelaData.map((scuderia: any) => ({
              value: String(scuderia.id),
              label: scuderia.name,
            }))
          );
        }

        if (especialidadResponse.ok) {
          const especialidadData = await especialidadResponse.json();
          setEspecialidadOptions(
            especialidadData.map((especialidad: any) => ({
              value: String(especialidad.id),
              label: especialidad.name,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section id="form-section">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <h2>Formulario de competidores</h2>
        {/*         <TextInput
          withAsterisk
          label="Name"
          placeholder="Name"
          key={form.key("name")}
          {...form.getInputProps("name")}
        /> */}
        <TextInput
          withAsterisk
          required
          label="Nombre"
          placeholder="Nombre"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <Select
          label="Especialidad"
          placeholder="Seleccione una Especialidad"
          data={especialidadOptions}
          {...form.getInputProps("especialidadId")}
        />
        <Select
          label="Centro"
          placeholder="Seleccione un Centro"
          data={escuelaOptions}
          {...form.getInputProps("escuelaId")}
        />
        <TextInput
          withAsterisk
          required
          label="Posicion"
          placeholder="posicion"
          key={form.key("posicion")}
          {...form.getInputProps("posicion")}
        />
        {/*         <select name="position" id="position">
          <option value="ORO">Oro</option>
          <option value="PLATA">Plata</option>
          <option value="BRONCE">Bronce</option>
        </select> */}
        <input type="submit" value="Enviar" className="cursor-pointer" />
      </form>
    </section>
  );
}
