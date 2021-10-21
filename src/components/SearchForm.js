import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, setLastData } = useGlobalContext();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setLastData([]);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="search-wrapper">
        <label htmlFor="name">Search Cocktail...</label>
        <input
          type="text"
          id="name"
          className="text-input"
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default SearchForm;
