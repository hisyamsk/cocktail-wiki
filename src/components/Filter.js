import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";

const Filter = () => {
  const { searchTerm, cocktails, setCocktails, lastData, setLastData } =
    useGlobalContext();
  const [filtered, setFiltered] = useState(false);

  const filterCocktail = (type) => {
    if (filtered) {
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
    setFiltered(!filtered);
  };

  useEffect(() => {
    if (cocktails) {
      setLastData([cocktails]);
    }
    setFiltered(false);
  }, [searchTerm]);

  return (
    <div className="filter-wrapper">
      <h2>Filter by:</h2>
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
