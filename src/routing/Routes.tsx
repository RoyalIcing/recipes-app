import React from "react";
import { Switch, Route } from "react-router";
import { ConnectedCounter } from "../containers/Counter/Counter";

export function Routes(): JSX.Element {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <p>Home</p>} />
        <Route exact path="/counter" render={() => <ConnectedCounter />} />
        <Route
          render={({ location }) => <p>Page not found: {location.pathname}</p>}
        />
      </Switch>
    </>
  );
}
