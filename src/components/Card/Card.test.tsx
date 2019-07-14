import { Card } from "./Card";

import React from "react";
import { render, cleanup } from "@testing-library/react";

describe("Card component", () => {
  let queries: ReturnType<typeof render>;
  beforeAll(() => {
    queries = render(
      <Card
        pageURL="/recipe/link"
        title="Tomato & Leek Vegan Quiche"
        image1XURL="https://cdn.centr.com/content/8000/7151/images/landscape32medium1x-loup-hco-tomatoleekveganquiche-32l.jpg"
      />
    );
  });
  afterAll(cleanup);

  it("has link to pageURL", () => {
    expect(queries.getByRole("link")).toHaveAttribute("href", "/recipe/link");
  });

  it("has figure containing text", () => {
    expect(queries.getByRole("figure")).toHaveTextContent("Tomato & Leek Vegan Quiche");
  });

  it("has image with 1x url", () => {
    expect(queries.getByRole("img")).toHaveAttribute("src", "https://cdn.centr.com/content/8000/7151/images/landscape32medium1x-loup-hco-tomatoleekveganquiche-32l.jpg");
  });
});
