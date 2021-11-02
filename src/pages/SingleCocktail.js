import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchCocktail = useCallback(async () => {
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      if (data.drinks) {
        const { drinks } = data;
        const drink = drinks[0];
        let ingredients = [];

        for (let i = 1; i <= 15; i++) {
          if (drink[`strIngredient${i}`]) {
            ingredients.push(drink[`strIngredient${i}`]);
          }
        }

        const {
          strDrink: name,
          strDrinkThumb: image,
          strCategory: category,
          strAlcoholic: type,
          strGlass: glass,
          strInstructions: instructions,
        } = drink;

        const newCocktail = {
          name,
          image,
          category,
          type,
          glass,
          instructions,
          ingredients: ingredients,
        };
        setCocktail(newCocktail);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    fetchCocktail();
  }, [id, fetchCocktail]);

  return (
    <div className="main-section container">
      {loading ? (
        <Loading />
      ) : !cocktail ? (
        <h2 className="title">no cocktail to display</h2>
      ) : (
        <div className="drink">
          <img src={cocktail.image} alt={cocktail.name} />
          <div className="detail-wrapper">
            <h1 className="title-main">
              {cocktail.name} <span>({cocktail.type})</span>
            </h1>
            <div className="drink-details">
              <p>
                <span>Category: </span>
                {cocktail.category}
              </p>
              <p>
                <span>Glass Type: </span>
                {cocktail.glass}
              </p>
              <p>
                <span>Ingredients:</span>
              </p>
              <ul>
                {cocktail.ingredients.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
              <p>
                <span>Instructions: </span>
                {cocktail.instructions}
              </p>
              <Link to="/">
                <button className="btn btn-primary">Home</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCocktail;
