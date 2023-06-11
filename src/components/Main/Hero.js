import "./hero.css";
import restaurantImage from "../../images/restaurant.jpg";
const Hero = () => {
  return (
    <section className="hero">
      <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>Reserve a Table</button>
      </article>
      <img src={restaurantImage} alt="Resturant" />
    </section>
  );
};

export default Hero;
