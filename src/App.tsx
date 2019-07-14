import React from "react";
import { Router } from "react-router";

import "./App.css";

import { history } from "./routing/browser";
import { Routes } from "./routing/Routes";
import { PrimaryNav } from "./containers/PrimaryNav/PrimaryNav";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <PrimaryNav />
        <main>
          <Routes />
        </main>
      </div>
    </Router>
  );
}

export default App;
