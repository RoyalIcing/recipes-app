import { PrimaryNav } from "./PrimaryNav";

import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("PrimaryNav component", () => {
  let queries: ReturnType<typeof render>;
  beforeAll(() => {
    queries = render(
      // <Link> require a router
      <MemoryRouter>
        <PrimaryNav />
      </MemoryRouter>
    );
  });
  afterAll(cleanup);

  it("has link to home", () => {
    expect(queries.getByText("Home")).toHaveAttribute("href", "/");
  });

  it("has link to recipes", () => {
    expect(queries.getByText("Recipes")).toHaveAttribute("href", "/recipes");
  });

  it("has link to counter", () => {
    expect(queries.getByText("Counter")).toHaveAttribute("href", "/counter");
  });
});
