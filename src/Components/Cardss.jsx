import React from "react";
import carData from "../Data/CarData.json";
import { X } from "lucide-react";

const Card = ({ card, onClose }) => {
  const handleCardClick = () => {
    // Handle card click action here if needed
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
      {/* Close button (X) */}
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
        onClick={onClose} // Call onClose function when close button is clicked
      >
        <X />
      </button>
    </div>
  );
};

const CardComponent = ({ setShowModal }) => {
  const handleClose = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Render cards */}
      {carData.map((card) => (
        <Card
          key={card.id}
          card={card}
          onClose={handleClose} // Pass handleClose function to Card component
        />
      ))}
    </div>
  );
};

export default CardComponent;
