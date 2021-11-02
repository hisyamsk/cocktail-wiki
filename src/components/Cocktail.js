import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Cocktail = ({ id, name, image, type, glass }) => {
  const { setCocktails, lastData } = useGlobalContext();

  const resetData = () => {
    setCocktails(lastData);
  };

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
          <button className="btn btn-small btn-primary" onClick={resetData}>
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
