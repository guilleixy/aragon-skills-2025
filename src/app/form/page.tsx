"use client";
import { useForm } from "@mantine/form";
import { Button, Checkbox, Group, TextInput } from "@mantine/core";

export default function FormPage() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {},

    validate: {},
  });
  return (
    <section id="form-section">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <h2>Formulario de competidores</h2>
        {/*         <TextInput
          withAsterisk
          label="Name"
          placeholder="Name"
          key={form.key("name")}
          {...form.getInputProps("name")}
        /> */}
        <input type="text" name="name" id="name" placeholder="Nombre" />
        <select name="category" id="category">
          <option value="1">Mecatrónica</option>
          <option value="2">Desarrollo web</option>
          <option value="3">Cloud Computing</option>
        </select>
        <input type="text" name="school" id="school" placeholder="Centro" />
        <select name="position" id="position">
          <option value="gold">Oro</option>
          <option value="silver">Plata</option>
          <option value="bronze">Bronce</option>
        </select>
        <input type="submit" value="Enviar" />
      </form>
    </section>
  );
}
