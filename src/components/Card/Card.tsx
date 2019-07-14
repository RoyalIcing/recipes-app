import React from "react";

import "./Card.scss";

interface CardProps {
  pageURL: string;
  title: string;
  image1XURL: string;
}
export function Card({ pageURL, title, image1XURL }: CardProps): JSX.Element {
  return (
    <div className="Card">
      <a href={pageURL} className="Card__link">
        <figure className="Card__figure">
          <img className="Card__image" src={image1XURL} alt="" />
          {/* A11Y description is via figcaption below */}
          <figcaption className="Card__title">{title}</figcaption>
        </figure>
      </a>
    </div>
  );
}
