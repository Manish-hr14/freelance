import React from 'react';
import styled from 'styled-components';

const CircleCards = () => {
  return (
    <CircleContainer>
      <CircleCard>
      <img src="https://i.postimg.cc/1R0ppF3g/lancer.png" alt="Image 1" />
        <h2>Card 1</h2>
        <p>This is some text for card 1.</p>
      </CircleCard>
      <CircleCard>
        <h2>Card 2</h2>
        <p>This is some text for card 2.</p>
      </CircleCard>
      <CircleCard center>
        <h2>Card 3</h2>
        <p>This is some text for card 3.</p>
      </CircleCard>
      <CircleCard>
        <h2>Card 4</h2>
        <p>This is some text for card 4.</p>
      </CircleCard>
      <CircleCard>
        <h2>Card 5</h2>
        <p>This is some text for card 5.</p>
      </CircleCard>
    </CircleContainer>
  );
};

const CircleContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  padding: 0;
  position: relative;
  flex-wrap: wrap;
`;

const CircleCard = styled.div`
  width: 45vw;
  height: 45vw;
  max-width: 250px;
  max-height: 250px;
  border-radius: 50%;
  overflow: hidden; /* Ensure the image is clipped to the circle */
  background-color: #007bff;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio and cover the circle */
    border-radius: 50%; /* Apply circular shape to the image */
  }

  &:hover {
    transform: scale(1.1);
  }

  p,
  h2 {
    margin: 0;
    position: absolute;
    bottom: -70px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
    padding: 10px;
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: 90vw;
  }
`;

export default CircleCards;