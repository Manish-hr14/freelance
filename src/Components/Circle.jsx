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
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 0;
  flex-wrap: wrap;
`;

const CircleCard = styled.div`
  width: ${({ center }) => (center ? '60vw' : '45vw')};
  height: ${({ center }) => (center ? '60vw' : '45vw')};
  max-width: ${({ center }) => (center ? '300px' : '250px')};
  max-height: ${({ center }) => (center ? '300px' : '250px')};
  border-radius: 50%;
  overflow: hidden;
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
    object-fit: cover;
    border-radius: 50%;
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
