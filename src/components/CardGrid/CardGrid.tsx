import React from "react";

import "./CardGrid.scss";
import { Card } from "../Card/Card";

interface CardGridProps {
  items: Array<{
    id: string;
    pageURL: string;
    title: string;
    image1XURL: string;
  }>;
}
export function CardGrid({ items }: CardGridProps): JSX.Element {
  return (
    <div className="CardGrid">
      {items.map(item => (
        <div className="CardGrid__item">
          <Card key={item.id} {...item} />
        </div>
      ))}
    </div>
  );
}
