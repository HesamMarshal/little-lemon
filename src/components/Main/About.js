import "./about.css";

import image1 from "../../images/greek_salad.jpg";

const About = () => {
  return (
    <section id="about" className="container">
      <div className="left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.{" "}
        </p>
      </div>
      <div className="right">
        <img src={image1} alt="" />
      </div>
    </section>
  );
};

export default About;
