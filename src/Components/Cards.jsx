import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import CardComponent from './Cardss';

function Card({
   account, amount, text, button, imgSrc, backgroundColor
}) {
   const [showCardComponent, setShowCardComponent] = useState(false);

   const handleButtonClick = () => {
      setShowCardComponent(true);
   };

   return (
      <>
         <CardStyled backgroundColor={backgroundColor}>
            <div className="card-image-con">
               <img src={imgSrc} alt="" />
            </div>
            <h4 className="card-title">
               {account}
            </h4>
            <h4 className="card-title">
               {amount} <span></span>
            </h4>
            <p className="c-para">{text}</p>
            <div className="button-con">
               <button onClick={handleButtonClick}>{button}</button>
            </div>
         </CardStyled>
         {showCardComponent && <CardComponent />}
      </>
   )
}

const CardStyled = styled.div`
    padding: 3rem 2rem;
    border-radius: 50px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

    ${props => props.backgroundColor && css`
        background-image: ${props.backgroundColor};
    `}

    /* Default color if no background color is provided */
    background-color: ${props => props.backgroundColor ? '#212236' : '#155C49'};

    .card-title {
        font-size: 1.7rem;
        color: #000;
        text-align: center;
        padding: 1.5rem 0;

        span {
            font-size: 1.1rem;
        }
    }

    .button-con {
        text-align: center;
        padding: 1.4rem 0;

        button {
            border: 2px solid #16194F;
            padding: .6rem 1.5rem;
            outline: none;
            cursor: pointer;
            background: transparent;
            border-radius: 20px;
            font-size: inherit;import React, { useState } from "react";
import carData from "../Data/CarData.json";
import { X } from "lucide-react";

const Card = ({ card, onCardClick }) => {
  const handleCardClick = () => {
    onCardClick(card);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderBottomWidth: "4px",
        display: "flex",
        alignItems: "center",
        position: "relative", 
      }}
      onClick={handleCardClick} // Added for card click
    >
      <div style={{ padding: "10px" }}>
        <img
          src={card.image}
          alt="Profile"
          style={{ width: "100px", height: "auto" }}
        />
      </div>
      <div style={{ flex: 1, padding: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <h2 style={{ marginTop: 0, marginBottom: "5px" }}>{card.name}</h2>
          <p style={{ marginBottom: "10px" }}>{card.description}</p>
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "4px 8px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
        onClick={(e) => {
          e.stopPropagation(); 
          onCardClick(null); 
        }}
      >
        <X />
      </button>
    </div>
  );
};

const CardComponent = () => {
  const [selectedCard, setSelectedCard] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {carData.map((card) => (
        <Card key={card.id} card={card} onCardClick={handleCardClick} />
      ))}
    </div>
  );
};

export default CardComponent;

            color: #16194F;
        }
    }

    .card-image-con {
        width: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;

        img {
            width: 100%;
            object-fit: cover;
        }
    }
`;

export default Card;
