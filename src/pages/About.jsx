import "../styles/about.scss";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <h1 className="about__title">
          About <span>RecipeShare</span> App
        </h1>

        <p className="about__subtitle">
          Discover, cook, and share recipes from around the world
        </p>

        <div className="about__content">
          <p>
            <span>RecipeShare</span> is a community driven recipe sharing
            platform where food lovers can explore delicious recipes.
          </p>

          <p>
            Our goal is to make cooking{" "}
            <span className="highlight">simple</span>,
            <span className="highlight"> fun</span>, and
            <span className="highlight"> accessible</span> for everyone. Whether
            you are a beginner or a professional chef, RecipeShare helps you
            find the perfect recipe for every occasion.
          </p>

          <p></p>
        </div>

        <div className="about__features">
          <div className="feature">Easy-to-follow recipes</div>
          <div className="feature"> Smart search & filters</div>
          <div className="feature"> Recipes from all cuisines</div>
        </div>

        <div className="contact-us about__content">
          <p>
            Want to Contact Developer{" "}
            <Link to={"https://asifh.netlify.app"}>click here </Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
