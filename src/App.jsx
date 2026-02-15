import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import SearchFilter from "./components/SearchFilter";
import RecipeDetails from "./pages/RecipeDetails";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <SearchFilter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipe-details" element={<RecipeDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
