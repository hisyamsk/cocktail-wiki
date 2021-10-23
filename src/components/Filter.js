import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";

const Filter = () => {
  const {
    searchTerm,
    setSearchTerm,
    cocktails,
    setCocktails,
    lastData,
    setLastData,
  } = useGlobalContext();

  const resetFilter = () => {
    setCocktails(lastData);
  };

  const filterCocktail = (type) => {
    const filteredCocktails = lastData.filter(
      (cocktail) =>
        cocktail.type === type || cocktail.type === "Optional alcohol"
    );

    if (filteredCocktails) {
      setCocktails(filteredCocktails);
    }
  };

  useEffect(() => {
    setLastData(cocktails);
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
        <button className="tag tag-green" onClick={resetFilter}>
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
