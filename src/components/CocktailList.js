import React from "react";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  return (
    <section className="main-section container">
      {loading ? (
        <Loading />
      ) : cocktails.length < 1 ? (
        <div className="title container">
          <h3>No cocktail matched your search critrea</h3>
        </div>
      ) : (
        <div>
          {cocktails.map((cocktail) => {
            return (
              <div className="cards-wrapper">
                <Cocktail key={cocktail.id} {...cocktail} />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CocktailList;
