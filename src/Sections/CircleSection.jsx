import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// Import CircleCard component
import CircleCard from "../Components/Circle";

const CircleCardSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <CircleCardStyled id="circle-card-section"data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
      <InnerLayout>
        <div>
          <h3
            className="small-heading"
            style={{ color: "white", marginBottom: "2rem" }}
          >
            <div style={{ color: "white", fontWeight: "bold" }}>
            Council
            </div>
          </h3>
          {/* Render CircleCard component */}
          <CircleCard />
        </div>
      </InnerLayout>
    </CircleCardStyled>
  );
};

const CircleCardStyled = styled.section`
  .card-con {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    padding-top: 6.4rem;
  }

  @media screen and (max-width: 980px) {
    .card-con {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 689px) {
    .card-con {
      grid-template-columns: repeat(1, 1fr);
    }

    /* Card size adjustments */
    .card-con CardWrapper {
      max-width: 90%; /* Adjust percentage as needed */
      margin: 1.5rem auto; /* Center cards and add spacing */
    }
  }
`;

// New styled component for individual card hover
const CardWrapper = styled.div`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export default CircleCardSection;
