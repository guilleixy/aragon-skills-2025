import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mantine/core";
import ContestantsTable from "@/components/Home/ContestantsTable";
import AstronautCard from "@/components/Home/AstronautCard";
import ContestantsLi from "@/components/Home/ContestantsLi";

export default function Home() {
  return (
    <div className={styles.page}>
      <section id="objectives" className="height-screen">
        <h2>Objetivos</h2>
        <ul className="card-wrapper">
          <AstronautCard
            title="Visibilizar la FP"
            img="/img/astronaut1.png"
            imgAlt="Astronaut sitting on a planet"
            text="Dar a conocer el alto nivel de la
              Formación Profesional aragonesa."
          />
          <AstronautCard
            title="Fomentar la excelencia"
            img="/img/astronaut2.png"
            imgAlt="Astronaut sitting on a planet"
            text="Motivar al alumnado a superarse y desarrollar competencias de alto
              nivel técnico y profesiona"
          />
          <AstronautCard
            title="Acercar la FP al tejido empresarial"
            img="/img/astronaut3.png"
            imgAlt="Astronaut sitting on a planet"
            text="Promover el contacto entre centros educativos, empresas y
              jóvenes talentos.​​"
          />
          <AstronautCard
            title="Seleccionar representantes"
            img="/img/astronaut4.png"
            imgAlt="Astronaut sitting on a planet"
            text="Elegir a los estudiantes que representarán a Aragón en las
              competiciones nacionales (SpainSkills) e internacionales
              (WorldSkills y EuroSkills).​​​"
          />
        </ul>
      </section>
      <section id="contestants" className="height-screen">
        <h2 style={{ marginTop: "30px" }}>¿Quiénes participan?</h2>
        <div className="contestants-content">
          <img src="/img/astronaut5.png" alt="Astronaut standing on planet" />
          <ul className="points-wrapper">
            <ContestantsLi
              emoji="⭐"
              text="Estudiantes &nbsp;de
              Formación Profesional de Grado Medio o Superior de centros
              públicos, privados y concertados de Aragón.​"
            />
            <ContestantsLi
              emoji="🪐"
              text="Profesores &nbsp;y
              tutores que actúan como preparadores y asesores técnicos.​​​"
            />
            <ContestantsLi
              emoji="🚀"
              text="Empresas
              &nbsp;colaboradoras que aportan recursos, material técnico y
              experiencia.​​​"
            />
          </ul>
        </div>
      </section>
      {/*       <ContestantsTable /> */}
    </div>
  );
}
