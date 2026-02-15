import React, { useState } from "react";
import "../styles/searchfilter.scss";
import { Link } from "react-router-dom";
import { CiCircleList, CiSearch } from "react-icons/ci";
import { useContextData } from "../context/Context";

export default function SearchFilter() {
  const [toggleList, setToggleList] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  const { filterData, searchRecipe } = useContextData();
  const getValues = (e) => {
    const values = e.target.textContent;
    filterData(values);
  };
  // console.log("filter data ", filterData);

  return (
    <>
      <section className="search-filter-btn">
        <div className="filter-btn btn">
          <CiCircleList onClick={() => setToggleList(!toggleList)} />
          {toggleList && (
            <div
              className="inner-filter-list"
              onClick={() => setToggleList(!toggleList)}
            >
              <ul onClick={getValues}>
                <li category={"Italian"}>
                  <Link>Atalian</Link>{" "}
                </li>
                <li category={"Asian"}>
                  <Link>Asian</Link>{" "}
                </li>
                <li category={"American"}>
                  <Link>American</Link>{" "}
                </li>
                <li category={"Mexican"}>
                  <Link>Mexican</Link>{" "}
                </li>
                <li category={"Mediterranean"}>
                  {" "}
                  <Link>Mediterranean</Link>
                </li>
                <li category={"Pakistani"}>
                  {" "}
                  <Link>Pakistani</Link>
                </li>
                <li category={"Japanese"}>
                  <Link>Japanese</Link>
                </li>
                <li category={"Korean"}>
                  <Link>Korean</Link>
                </li>
                <li category={"Moroccan"}>
                  <Link>Moroccan</Link>
                </li>
                <li category="Greek">
                  <Link>Greek</Link>
                </li>
                <li category="Thai">
                  <Link>Thai</Link>
                </li>
                <li category="Indian">
                  <Link>Indian</Link>
                </li>
                <li category="Turkish">
                  <Link>Turkish</Link>
                </li>
                <li category="Russian">
                  <Link>Russian</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="nav-links">
          <Link to={"/"}>home</Link>
          <Link to={"/about"}>about</Link>
          <Link to={"/recipes"}>recipes</Link>
        </div>
        <div className="search-btn btn">
          <CiSearch onClick={() => setToggleSearch(!toggleSearch)} />
          {toggleSearch && (
            <div className="search-filed">
              <input
                type="search"
                placeholder="Search your favorite food recipe here "
                onChange={(e) => searchRecipe(e.target.value)}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
