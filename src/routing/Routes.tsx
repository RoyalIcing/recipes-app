import React from "react";
import { Switch, Route } from "react-router";

export function Routes(): JSX.Element {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <p>Home</p>} />
        <Route
          render={({ location }) => <p>Page not found: {location.pathname}</p>}
        />
      </Switch>
    </>
  );
}
