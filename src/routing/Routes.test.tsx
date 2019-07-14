import { Routes } from "./Routes";

import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("Routes component", () => {
  function subject({ path }: { path: string }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <Routes />
      </MemoryRouter>
    );
  }
  afterEach(cleanup);

  describe("when path is /", () => {
    it("renders home page", () => {
      const { getByText } = subject({ path: "/" });
      expect(getByText("Home")).toBeInstanceOf(HTMLElement);
    });
  });

  describe("when path is /unknown", () => {
    it("renders not found page with path", () => {
      const { getByText } = subject({ path: "/unknown" });
      expect(getByText("Page not found: /unknown")).toBeInstanceOf(HTMLElement);
    });
  });
});
