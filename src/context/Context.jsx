import { useEffect, useRef, useState } from "react";
import { createContext, useContext } from "react";

const ContextData = createContext();

export const ContextProvider = ({ children }) => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const searchTimeout = useRef(null);

  const API_URL = "https://dummyjson.com/recipes";
  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecipe(data.recipes);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const filterData = (recipeName) => {
    const filtered = recipe.filter((item) =>
      item.cuisine.toLowerCase().includes(recipeName.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  const searchRecipe = (text) => {
    clearTimeout(searchTimeout.current);

    searchTimeout.current = setTimeout(() => {
      if (!text) {
        setFilteredData(recipe);
        return;
      }

      const result = recipe.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      );

      setFilteredData(result);
    }, 400);
  };
  return (
    <ContextData.Provider
      value={{
        recipe,
        loading,
        filteredData,
        filterData,
        searchRecipe,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

// make a hook for easy use of context
export const useContextData = () => useContext(ContextData);
