import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const fetchCocktail = async () => {
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const { drinks } = data;
      const { idDrink } = drinks[0];
      console.log(idDrink);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchCocktail();
  }, []);

  return (
    <div className="main-section container">
      {loading ? <Loading /> : <h2>SingleCocktail Component</h2>}
    </div>
  );
};

export default SingleCocktail;
