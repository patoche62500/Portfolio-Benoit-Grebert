import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "/assets/images/Logo.webp";
// composants

// style
import "./header.scss";
// Fonction externe
import {
  fetchData,
  removeMajAndSpace,
  arrayProperty,
  removeSpace,
} from "../../utils/fonction";

export default function Header() {
  useEffect(() => {}, []);

  return (
    <header>
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <h1>Benoît Grébert</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#formation">Formations</a>
          </li>
          <li>
            <a href="#competence">Competences</a>
          </li>
          <li>
            <a href="#projet">Projets</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
