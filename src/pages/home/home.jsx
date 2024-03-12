import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// Style
import "./home.scss";

//--
import image from "/assets/images/benoit.png";
// Composants
import Story from "../../composents/story/story";
import Formation from "../../composents/formation/formation";
import Section from "../../composents/section/section";
import Competence from "../../composents/competence/competence";
import Project from "../../composents/project/project";

// Fonction Externe
import { fetchData } from "../../utils/fonction";

// Fonction loader pour le chargement initial des données
export async function loader() {
  const data = await fetchData("/datas/datas.json");

  return { data };
}

export default function Home() {
  const { data } = useLoaderData();

  useEffect(() => {
    //console.log("Le composant Home est monté !");

    return () => {
      //console.log("Le composant Home est démonté !");
    };
  }, []);

  return (
    <main>
      <section id="profile">
        <h2>Bienvenue</h2>
        <ul className="container__profile">
          <li>
            <div className="container__photo">
              <img src={image} alt="Ma Photo" />
            </div>
          </li>
          <li className="content">
            <h3>Qui suis-je ?</h3>
            <Story content={data.story} />
          </li>
        </ul>
      </section>
      <Section id={"formation"} title={data.section[0]}>
        <ul className="container__card">
          {data.formation?.map((e) => (
            <li key={e.title}>
              <Formation content={e} />
            </li>
          ))}
        </ul>
      </Section>
      <Section id={"competence"} title={data.section[1]}>
        <ul>
          {data.competence?.map((e) => (
            <li key={e.title}>
              <Competence content={e} />
            </li>
          ))}
        </ul>
      </Section>
      <Section id={"projet"} title={data.section[2]}>
        <ul className="container__projet">
          {data.projet.map((e) => (
            <li className="container__projet_element" key={e.title}>
              <Project content={e} />
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
