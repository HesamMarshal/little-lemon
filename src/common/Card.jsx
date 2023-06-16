import "./card.css";

import deliveryIcon from "../images/delivery.svg";
const Card = ({ imageSrc, title, price, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="" className="foodImage" />
      <div className="title">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
      <p className="desc"> {description} </p>
      <div className="delivery">
        <p>Order a delivery</p>
        <img src={deliveryIcon} alt="" />
      </div>
    </div>
  );
};

export default Card;
