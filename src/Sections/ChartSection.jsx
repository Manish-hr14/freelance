import React, { useEffect } from "react";
import Lottie from "lottie-react";
import Rocket from "../assets/img/Rocket.json";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

const ChartSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ChartStyled id="feathures">
      <InnerLayout>
        <div className="chart-con">
          <div className="chart-left">
            <LottieWrapper>
              <Lottie
                style={{ width: "80%", height: "100%" }}
                source={Rocket}
                autoPlay
                loop
                animationData={Rocket}
              />
            </LottieWrapper>
          </div>
          <div
            className="chart-right"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h2 className="secondary-heading">Mission</h2>
            <p style={{ color: "white" }}>
              The Near Protocol and Near Digital Collective(NDC) champion the
              advancement of decentralised technology. Our mission is to
              increase awareness, expand community, drive adoption, support
              ecosystem, and promote sustainability. We aim to contribute to
              the widespread adoption and success of these platforms, empowering
              individuals and organizations to harness their potential and drive
              positive change.
            </p>
          </div>
        </div>
      </InnerLayout>
    </ChartStyled>
  );
};

const ChartStyled = styled.section`
  .chart-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1rem; 
    }

    .chart-left {
      width: 100%;

      img {
        box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
        border-radius: 62px;
        width: 100%;
        max-width: 300px; 
        margin: 0 auto; 
      }
    }

    .chart-right {
      padding-left: 0;

      p {
        padding: 1rem 0;

        @media screen and (max-width: 768px) {
          text-align: center;
        }
      }

      h2.secondary-heading {
        color: white;
        font-weight: bold;
        text-align: center;
        margin-top: 8rem; // Restored original margin for h2

        @media screen and (max-width: 768px) {
          margin-top: 2rem; 
        }
      }
    }
  }
`;


const LottieWrapper = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center;
`;

export default ChartSection;
