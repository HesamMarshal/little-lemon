import "./hero.css";
import restaurantFood from "../../images/restaurantFood.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section id="hero">
      <div className="hero container">
        <article className="hero-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            If you're looking for a delicious and healthy meal, come to our
            Mediterranean food restaurant. We serve a variety of dishes from
            Greece, Turkey, Morocco, and more. You'll love our fresh salads,
            grilled meats, savory sauces, and warm breads. Whether you want a
            hearty gyro, a spicy tagine, or a creamy baklava, we have something
            for everyone. Enjoy the flavors of the Mediterranean at our cozy and
            friendly place.
          </p>
          <Link to="/booking">
            <button>Reserve a Table</button>
          </Link>
        </article>
        <article className="hero-right">
          <img src={restaurantFood} alt="Resturant" className="hero-image" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
