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
        <div className="container">
          <h1>No cocktail matched your search critrea</h1>
        </div>
      ) : (
        <>
          <h1 className="title">Cocktails</h1>
          <div className="card-wrapper">
            {cocktails.map((cocktail) => {
              return <Cocktail key={cocktail.id} {...cocktail} />;
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default CocktailList;
