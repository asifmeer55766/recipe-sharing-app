import React, { useEffect, useState } from "react";
import "../assets/recipe-details.scss";
import Loading from "../components/Loading";
export default function RecipeDetails() {
  const id = localStorage.getItem("id");
  const [recipeId, setRecipeId] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then(setRecipeId);
  }, [id]);
  if (!recipeId) return <Loading />;
  console.log("recipe details ");
  return (
    <>
      <div className="recipe-details-container" key={recipeId.id}>
        <h1>{recipeId.name}</h1>
        <div className="tags">
          {recipeId.tags.map((item) => (
            <span>{item}</span>
          ))}
        </div>
        <div className="recipe-box">
          <div className="left-image">
            <img src={recipeId.image} alt="recipe image " />
          </div>
          <div className="right-content">
            <h3>{recipeId.name}</h3>
            <p>
              Cuisine <strong>{recipeId.cuisine}</strong>
            </p>
            <span>
              Preparation Time <strong>{recipeId.prepTimeMinutes}</strong>
            </span>
            <span>
              Ratings <strong>{recipeId.rating}</strong>
            </span>{" "}
            <span>
              User Reviews <strong>{recipeId.reviewCount}</strong>
            </span>{" "}
          </div>
        </div>
        <div className="sub-details">
          <div className="informations">
            <p>
              calories per serving <span>{recipeId.caloriesPerServing}</span>
            </p>
            <p>
              difficulty <span> {recipeId.difficulty}</span>
            </p>
            <p>
              cook time minutes <span>{recipeId.cookTimeMinutes}</span>
            </p>
            <p>
              servings <span>{recipeId.servings}</span>
            </p>
          </div>
          <div className="ingredients">
            <h3>Required Ingredients</h3>
            <ol>
              {recipeId.ingredients.map((item) => (
                <li> {item}</li>
              ))}
            </ol>
          </div>
          <div className="instructions">
            <h3>Instructions</h3>
            <ol>
              {recipeId.instructions.map((item) => (
                <li>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
