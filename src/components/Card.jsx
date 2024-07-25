import React from "react";
import { Link } from "react-router-dom";

import "../css/Card.css";

export const Card = ({ imgSrc, imgAlt, title, description, link }) => {
  return (
    <Link to={link} className="card-link">
      <div className="card-container">
        {imgSrc && imgAlt && (
          <img src={imgSrc} alt={imgAlt} className="card-img" />
        )}
        {title && <h1 className="card-title">{title}</h1>}
        {/* {description && <p className="card-description">{description}</p>} */}
      </div>
    </Link>
  );
};
