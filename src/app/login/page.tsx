"use client";
import { useSession, signIn, signOut } from "next-auth/react";

import { useForm } from "@mantine/form";
import {
  Button,
  Checkbox,
  Group,
  TextInput,
  PasswordInput,
} from "@mantine/core";

export default function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Loggeado como {session?.user?.email} <br />{" "}
        <button onClick={() => signOut()}>Cerrar Sesión</button>{" "}
      </>
    );
  }
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },

    validate: {},
  });
  return (
    <section>
      <h2>Inicio de sesión</h2>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Username"
          placeholder="Type your username"
          key={form.key("username")}
          {...form.getInputProps("username")}
        />
        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Type your password"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </section>
  );
}
