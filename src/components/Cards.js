import React from "react";
// import cardsData from "../utils/cardData";
import "./cards.css";

const Cards = ({ showData }) => {
  const cardsDataAll = showData.map((card) => (
    <div className="card" key={card.id}>
      <div className="card--info">
        <img src={card.img} alt="img" />
        <h1 className="title">{card.title}</h1>
        <p className="decs">{card.desc}</p>
        <button className="learn--more">learn more</button>
      </div>
    </div>
  ));
  return <div className="card--data">{cardsDataAll}</div>;
};

export default Cards;
