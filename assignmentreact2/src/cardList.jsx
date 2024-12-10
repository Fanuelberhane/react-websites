import React from "react";
import Card from "./Card";




const CardList = ({data}) => {
  return (
    <div className="card-list">
      {data.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;