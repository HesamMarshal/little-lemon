import "./about.css";

import image1 from "../../images/mario_and_adrian1.jpg";
import image2 from "../../images/mario_and_adrian2.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="left">
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
        </div>
        <div className="right">
          <img
            className="top about-image"
            src={image1}
            alt="Mario and Adrian"
          />
          <img className="about-image" src={image2} alt="Mario and Adrian" />
        </div>
      </div>
    </section>
  );
};

export default About;
