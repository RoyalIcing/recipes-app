import React from "react";
import { Router } from "react-router";

import "./App.css";

import { history } from "./routing/browser";
import { Routes } from "./routing/Routes";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <main>
          <Routes />
        </main>
      </div>
    </Router>
  );
}

export default App;
