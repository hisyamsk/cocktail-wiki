import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, image, type, glass }) => {
  return (
    <div className="card-container">
      <img src={image} alt={name} />
      <div className="cocktail-info">
        <h2>{name}</h2>
        <p
          className={`${type === "Alcoholic" ? "alcoholic" : "non-alcoholic"}`}
        >
          {type}
        </p>
        <p>{glass}</p>
        <Link to={`cocktail/${id}`}>
          <button className="btn btn-small btn-primary">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
