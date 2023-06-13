import Card from "../../common/Card";
import "./highlights.css";

import greekSalad from "../../images/greek_salad.jpg";
import bruchetta from "../../images/bruchetta.svg";
import lemonDesert from "../../images/lemon_dessert.jpg";
const Highlights = () => {
  return (
    <section id="highlights" className="container">
      <div className="top">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cardContainer">
        <Card
          imageSrc={greekSalad}
          title="Greek salad"
          price="12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with runchy garlic and rosemary croutons."
        />
        <Card
          imageSrc={bruchetta}
          title="Bruchetta"
          price="5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <Card
          imageSrc={lemonDesert}
          title="Lemon Dessert"
          price="5.00"
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </section>
  );
};

export default Highlights;
