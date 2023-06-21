import "./rating.css";
import starImg from "../images/star_rating_icon.jpg";

const Rating = ({ star, name, imgSrc, review }) => {
  return (
    <article className="review">
      <img src={imgSrc} alt={name} className="profileImage" />
      <div className="info">
        <div className="rating">
          <img src={starImg} alt="Review Star" height={15} />
        </div>
        <p className="profileName">{name}</p>
        <p className="reviewText">{review}</p>
      </div>
    </article>
  );
};

export default Rating;
