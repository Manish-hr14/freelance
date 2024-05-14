import React from "react";
import styled from "styled-components";

const CircleCards = () => {
  return (
    <CircleContainer>
      <CircleCard>
        <CircleContent>
          <ImageContainer>
            <img src="https://i.postimg.cc/1R0ppF3g/lancer.png" alt="Image 1" />
          </ImageContainer>
        </CircleContent>
        <HelloText>Council</HelloText>
        <HelloText>Council</HelloText>
        <FlexContainer>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="https://i.postimg.cc/ZnCghHHh/64cebc6c19c2fe31de94c78e-X-vector-logo-download.png"
              alt="Twitter Logo"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="https://i.postimg.cc/ZnCghHHh/64cebc6c19c2fe31de94c78e-X-vector-logo-download.png"
              alt="Twitter Logo"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </FlexContainer>
      </CircleCard>
      <CircleCard>
        <CircleContent>
          <ImageContainer>
            <img src="https://i.postimg.cc/1R0ppF3g/lancer.png" alt="Image 1" />
          </ImageContainer>
        </CircleContent>
        <HelloText>Council</HelloText>
        <HelloText>Council</HelloText>
        <FlexContainer>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="https://i.postimg.cc/ZnCghHHh/64cebc6c19c2fe31de94c78e-X-vector-logo-download.png"
              alt="Twitter Logo"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="https://i.postimg.cc/ZnCghHHh/64cebc6c19c2fe31de94c78e-X-vector-logo-download.png"
              alt="Twitter Logo"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </FlexContainer>
      </CircleCard>
      <CircleCard center>
        <CircleContent center>
          <ImageContainer>
            <img src="https://i.postimg.cc/1R0ppF3g/lancer.png" alt="Image 1" />
          </ImageContainer>
        </CircleContent>
        <HelloText>Founder</HelloText>
        <HelloText>Council</HelloText>
        <FlexContainer>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="https://i.postimg.cc/ZnCghHHh/64cebc6c19c2fe31de94c78e-X-vector-logo-download.png"
              alt="Twitter Logo"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="https://i.postimg.cc/ZnCghHHh/64cebc6c19c2fe31de94c78e-X-vector-logo-download.png"
              alt="Twitter Logo"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </FlexContainer>
      </CircleCard>

      <CircleCard>
        <CircleContent>
          <ImageContainer>
            <img src="https://i.postimg.cc/1R0ppF3g/lancer.png" alt="Image 1" />
          </ImageContainer>
        </CircleContent>
        <HelloText>Council</HelloText>
        <HelloText>Council</HelloText>
        <FlexContainer>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="https://i.postimg.cc/ZnCghHHh/64cebc6c19c2fe31de94c78e-X-vector-logo-download.png"
              alt="Twitter Logo"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="https://i.postimg.cc/ZnCghHHh/64cebc6c19c2fe31de94c78e-X-vector-logo-download.png"
              alt="Twitter Logo"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </FlexContainer>
      </CircleCard>
      <CircleCard>
        <CircleContent>
          <ImageContainer>
            <img src="https://i.postimg.cc/1R0ppF3g/lancer.png" alt="Image 1" />
          </ImageContainer>
        </CircleContent>
        <HelloText>Council</HelloText>
        <HelloText>Council</HelloText>
        <FlexContainer>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="https://i.postimg.cc/ZnCghHHh/64cebc6c19c2fe31de94c78e-X-vector-logo-download.png"
              alt="Twitter Logo"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="https://i.postimg.cc/ZnCghHHh/64cebc6c19c2fe31de94c78e-X-vector-logo-download.png"
              alt="Twitter Logo"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </FlexContainer>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 10px; /* Adjust spacing between images */
`;

const CircleContent = styled.div`
  width: ${({ center }) => (center ? "300px" : "250px")};
  height: ${({ center }) => (center ? "300px" : "250px")};
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

  @media (max-width: 768px) {
    width: ${({ center }) => (center ? "300px" : "200px")};
    height: ${({ center }) => (center ? "300px" : "200px")};
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CircleText = styled.p`
  margin: 0;
  z-index: 1;
  position: absolute;
  bottom: 10px;
`;

const HelloText = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

export default CircleCards;
