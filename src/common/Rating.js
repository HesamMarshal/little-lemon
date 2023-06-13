import "./rating.css";

const Rating = ({ star, name, imgSrc, review }) => {
  return (
    <article className="review">
      <div className="rating">{star}</div>
      <div className="profile">
        <img src={imgSrc} alt={name} className="profileImage" />
        <p className="profileName">{name}</p>
      </div>
      <p className="reviewText">{review}</p>
    </article>
  );
};

export default Rating;
