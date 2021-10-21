import React from "react";
import SearchForm from "../components/SearchForm";
import Filter from "../components/Filter";
import CocktailList from "../components/CocktailList";

const Home = () => {
  return (
    <main>
      <div className="top-section container">
        <SearchForm />
        <Filter />
      </div>
      <CocktailList />
    </main>
  );
};

export default Home;
