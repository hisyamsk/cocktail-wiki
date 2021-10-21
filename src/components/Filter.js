import React, { useState, useRef } from "react";
import { useGlobalContext } from "../context";

const Filter = () => {
  const { searchTerm, setSearchTerm, cocktails, setCocktails } =
    useGlobalContext();
  const [active, setActive] = useState(false);
  const [lastData, setLastData] = useState([]);

  const filterCocktail = (type) => {
    if (active) {
      setCocktails(lastData);
    } else {
      setLastData(cocktails);
      const filteredCocktails = cocktails.filter(
        (cocktail) =>
          cocktail.type === type || cocktail.type === "Optional alcohol"
      );
      if (filteredCocktails) {
        setCocktails(filteredCocktails);
      }
    }
    setActive(!active);
  };

  return (
    <div className="filter-wrapper">
      <h2>Filter by</h2>
      <div className="tag-container">
        <button
          className="tag tag-purple"
          onClick={() => filterCocktail("Alcoholic")}
        >
          Alcoholic
        </button>
        <button
          className="tag tag-blue"
          onClick={() => filterCocktail("Non alcoholic")}
        >
          Non-Alcoholic
        </button>
      </div>
    </div>
  );
};

export default Filter;
