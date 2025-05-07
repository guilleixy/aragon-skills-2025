import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mantine/core";
import ContestantsTable from "@/components/Home/ContestantsTable";

export default function Home() {
  return (
    <div className={styles.page}>
      <section id="objectives" className="height-screen">
        <h2>Objetivos</h2>
        <ul className="card-wrapper">
          <li className="card">
            <h4>
              <b>Visibilizar la FP</b>
            </h4>
            <img
              src="/img/astronaut1.png"
              alt="Astronaut sitting on a planet"
            />
            <p>
              Dar a conocer el alto nivel de la
              <b>Formación Profesional</b> aragonesa.
            </p>
          </li>
          <li className="card">
            <h4>
              <b>Fomentar la excelencia</b>
            </h4>
            <img
              src="/img/astronaut2.png"
              alt="Astronaut hanging under a rocket ship"
            />
            <p>
              Motivar al alumnado a superarse y desarrollar competencias de alto
              nivel <b>técnico y profesiona</b>l.​
            </p>
          </li>
          <li className="card">
            <h4>
              <b>Acercar la FP al tejido empresarial</b>
            </h4>
            <img
              src="/img/astronaut3.png"
              alt="Astronaut playing with planets"
            />
            <p>
              Promover el <b>contacto</b> entre centros educativos, empresas y
              jóvenes talentos.​​
            </p>
          </li>
          <li className="card">
            <h4>
              <b>Seleccionar representantes</b>
            </h4>
            <img
              src="/img/astronaut4.png"
              alt="Astronaut sitting on a rocket ship"
            />
            <p>
              Elegir a los estudiantes que representarán a <b>Aragón</b> en las
              competiciones nacionales (SpainSkills) e internacionales
              (WorldSkills y EuroSkills).​
            </p>
          </li>
        </ul>
      </section>
      <section id="contestants" className="height-screen">
        <h2 style={{ marginTop: "30px" }}>¿Quiénes participan?</h2>
        <div className="contestants-content">
          <img src="/img/astronaut5.png" alt="Astronaut standing on planet" />
          <ul className="points-wrapper">
            <li className="point-li">
              <span className="point-emoji">⭐</span> &nbsp;Estudiantes &nbsp;de
              Formación Profesional de Grado Medio o Superior de centros
              públicos, privados y concertados de Aragón.​
            </li>
            <li className="point-li">
              <span className="point-emoji">🪐</span>&nbsp;Profesores &nbsp;y
              tutores que actúan como preparadores y asesores técnicos.​​
            </li>
            <li className="point-li">
              <span className="point-emoji">🚀</span>&nbsp; Empresas
              &nbsp;colaboradoras que aportan recursos, material técnico y
              experiencia.​​
            </li>
          </ul>
        </div>
      </section>
      {/*       <ContestantsTable /> */}
    </div>
  );
}
