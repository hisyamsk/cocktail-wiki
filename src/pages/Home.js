import React from "react";
import SearchForm from "../components/SearchForm";
import Filter from "../components/Filter";
import CocktailList from "../components/CocktailList";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";

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
