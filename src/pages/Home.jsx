import "../styles/home.scss";
import Loading from "../components/Loading";
import { useContextData } from "../context/Context";
import { useEffect, useState } from "react";
export default function Home() {
  const { recipe, loading, filteredData } = useContextData();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filteredData && filteredData.length > 0) {
      setData(filteredData);
    } else {
      setData(recipe);
    }
  }, [recipe, filteredData]);
  return (
    <>
      <section className="home-container">
        <div className="home-title">
          <h1>Your faviorate collection</h1>
          <p>A collection of recipes for the week ending</p>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="landing-food-boxes">
            {data.map((item) => (
              <div className="container-box" key={item.id}>
                <img src={item.image} alt="food image" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
