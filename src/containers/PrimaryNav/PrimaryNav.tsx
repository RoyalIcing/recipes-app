import React from "react";
import { Link } from "react-router-dom";

import "./PrimaryNav.scss";

export function PrimaryNav(): JSX.Element {
  return (
    <nav className="PrimaryNav" role="navigation">
      <ul className="row">
        <li>
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
}
