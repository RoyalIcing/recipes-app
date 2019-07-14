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
        <div key={item.id} className="CardGrid__item">
          <Card {...item} />
        </div>
      ))}
    </div>
  );
}
