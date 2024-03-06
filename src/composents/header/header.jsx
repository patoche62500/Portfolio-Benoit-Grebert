import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// composants

// style
//import "./header.scss";
// Fonction externe
import {
  fetchData,
  removeMajAndSpace,
  arrayProperty,
  removeSpace,
} from "../../utils/fonction";

export default function Header() {
  useEffect(() => {}, []);

  return <header></header>;
}
