import Rating from "../../common/RatingCard";
import profileImage1 from "../../images/testimonial_1.webp";
import profileImage2 from "../../images/testimonial_2.webp";
import profileImage3 from "../../images/testimonial_3.webp";
import profileImage4 from "../../images/testimonial_4.webp";
import "./testimonials.css";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="testimonials container">
        <h3>Testimonials</h3>
        <div className="ratingsContainer">
          {/* TODO use Map function */}
          <Rating
            star="Star 4.5"
            name="Hesam Marshal"
            imgSrc={profileImage1}
            review="I love this pizza! It's cheesy, crispy and loaded with toppings. The sauce is tangy and the crust is soft. Best pizza ever!"
          />
          <Rating
            star="Star 4.9"
            name="Anna Sharapova"
            imgSrc={profileImage2}
            review="This salad is so fresh and crunchy. The dressing is light and creamy, and the chicken is tender and juicy. I like the nuts and cranberries for some extra flavor and texture."
          />
          <Rating
            star="Star 3.9"
            name="Adam Smith"
            imgSrc={profileImage3}
            review="This cake is too dry and bland. The frosting is too sweet and artificial. I regret buying this cake. It's a waste of money and calories."
          />
          <Rating
            star="Star 4.3"
            name="Yuki Tsunada"
            imgSrc={profileImage4}
            review="This soup is amazing! It's warm, hearty and comforting. The vegetables are cooked perfectly and the broth is rich and flavorful. I feel cozy and satisfied after eating this soup."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
