import React from "react";


const Card = ({ card }) => {
  const handleCardClick = () => {
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
      onClick={handleCardClick}
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
    </div>
  );
};

const CardComponent = () => {
  return (
    <div>
    </div>
  );
}

export default CardComponent;