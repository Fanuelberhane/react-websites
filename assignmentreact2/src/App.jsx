import React from "react";
import cardImage from "./assets/card1Image.jpg";
import card1Image from "./assets/card1Image.jpg";
import card2Image from "./assets/card2Image.jpg";
import card3Image from "./assets/card3Image.jpg";
import CardList from "./cardList";
import './index.css';
const App = () => {
  const cards = [
    {
      id: 1,
      image: cardImage,
      title: "Card Title 1",
      description: "This is the description for card 1."
    },
    {
      id: 2,
      image: card1Image,
      title: "Card Title 2",
      description: "This is the description for card 2."
    },
    {
      id: 3,
      image: card2Image,
      title: "Card Title 3",
      description: "This is the description for card 3."
    },
    {
      id: 4,
      image: card3Image,
      title: "Card Title 4",
      description: "This is the description for card 4."
    }
  ];
  return (
    <div className="App">
      <h1>Card Collection</h1>
      <CardList  data={cards}/> {}
    </div>
  );
};

export default App;