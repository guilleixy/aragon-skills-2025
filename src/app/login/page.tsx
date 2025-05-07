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
  /*   const { data: session } = useSession();
  if (session) {
    return (
      <>
        Loggeado como {session?.user?.email} <br />{" "}
        <button onClick={() => signOut()}>Cerrar Sesión</button>{" "}
      </>
    );
  } */
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },

    validate: {},
  });
  return (
    <section id="form-section">
      <form
        target="_blank"
        action="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        method="post"
      >
        <h2>Inicio de sesión</h2>
        <input type="text" name="user" id="user" placeholder="Usuario" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
        />
        <input type="submit" value="Enviar" className="cursor-pointer" />
      </form>
    </section>
  );
}
