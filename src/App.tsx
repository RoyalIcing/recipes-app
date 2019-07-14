import React from "react";
import { Router } from "react-router";
import { Provider } from "react-redux";

import "./App.css";

import { history } from "./routing/browser";
import { Routes } from "./routing/Routes";
import { PrimaryNav } from "./components/PrimaryNav/PrimaryNav";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <PrimaryNav />
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
