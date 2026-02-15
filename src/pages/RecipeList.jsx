import React, { useEffect, useState } from "react";
import "../styles/recipelist.scss";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { useContextData } from "../context/Context";
export default function RecipeList() {
  const { recipe, loading, filteredData } = useContextData();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const showDetails = (id) => {
    localStorage.setItem("id", id);
    navigate("/recipe-details");
  };

  useEffect(() => {
    if (filteredData && filteredData.length > 0) {
      setData(filteredData);
    } else {
      setData(recipe);
    }
  }, [recipe, filteredData]);
  return (
    <>
      {/* {data == [] ? <Loading /> : "loading"} */}
      {loading ? (
        <Loading />
      ) : (
        <section className="recipe-container">
          {data.map((item) => (
            <div
              className="recipe-box"
              key={item.id}
              onClick={() => showDetails(item.id)}
            >
              <div className="left-image">
                <img src={item.image} alt="recipe image " />
              </div>
              <div className="right-content">
                <h3>{item.name}</h3>
                <p>{item.cuisine}</p>
                <span>
                  Preparation Time <strong>{item.prepTimeMinutes}min</strong>
                </span>
                <span>
                  Ratings <strong>{item.rating}</strong>
                </span>{" "}
                <span>
                  User Reviews <strong>{item.reviewCount}</strong>
                </span>{" "}
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
