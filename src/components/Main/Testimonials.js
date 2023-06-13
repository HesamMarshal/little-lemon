import Rating from "../../common/Rating";
import profileImage from "../../images/profile.png";
import "./testimonials.css";
const Testimonials = () => {
  return (
    <section id="testimonials" className="container">
      <h3>Testimonials</h3>
      <div className="ratingsContainer">
        <Rating
          star="Star 4.5"
          name="Hesam Marshal"
          imgSrc={profileImage}
          review="Review Text"
        />
        <Rating
          star="Star 4.9"
          name="Anna Sharapova"
          imgSrc={profileImage}
          review="Review Text"
        />
        <Rating
          star="Star 3.9"
          name="Adam Smith"
          imgSrc={profileImage}
          review="Review Text"
        />
        <Rating
          star="Star 4.3"
          name="Yuki Tsunada"
          imgSrc={profileImage}
          review="Review Text"
        />
      </div>
    </section>
  );
};

export default Testimonials;
