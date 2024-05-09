
import React, { useEffect, useState } from "react";
import "./Components/Dapps.css"; // Import CSS for styling
import Button from "./Components/Button";

const Dapp = () => {
  const handleButtonClick = () => {
    window.location.href =
      "https://near.org/fdaomultixender.near/widget/MultiXender";
  };

  const [multisendVisible, setMultisendVisible] = useState(false);
  const [activatorVisible, setActivatorVisible] = useState(false);

  useEffect(() => {
    // Function to check if an element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.outerHeight || document.documentElement.clientHeight)
      );
    };

    // Function to handle scroll event
    const handleScroll = () => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition >= 1200) {
        setTimeout(() => setMultisendVisible(true), 0);
      }

      if (scrollPosition >= 1600) {
        setTimeout(() => setActivatorVisible(true), 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="centered-text">
        <h1>Dapps Powered By FDAO</h1>
        <div className="card-container">
          {/* First Card: MultiXender */}
          <div
            className={`card multisend ${multisendVisible ? "visible" : ""}`}
          >
            <div className="block1 relative text-center bg-gray-200 border border-black rounded-md m-4 p-4">
              <img
                src="https://i.postimg.cc/sDhmk02p/Animated-Sticker1-ezgif-com-gif-maker.gif"
                alt="Animated Sticker"
                className="mx-auto w-48 sm:w-48 md:w-48 lg:w-48 xl:w-48"
              />
            </div>

            <div className="block2 flex justify-center items-center border rounded-md m-4">
              <p className="text-black text-2xl md:text-8xl">
                Multi<span className="text-red-500">X</span>ender
              </p>
            </div>

            <div className="block3 bg-gray-200 border border-black rounded-md p-4 m-4 overflow-auto">
              <p className="">
                MultiXender, built on the Near Protocol, empowers users to
                transmit NEAR tokens to multiple recipients simultaneously
                through a single transaction, optimizing speed, security, and
                efficiency.
              </p>
            </div>

            <div className="block4 mt-4 md:mt-0 -mt-17 md:-mt-4">
              <div className="flex justify-center mt-4">
                <Button className="text-sm md:text-base">Click Here</Button>
              </div>
              <div
                className={`card activator ${
                  activatorVisible ? "visible" : ""
                }`}
              >
                <div className="block6 flex justify-center items-center border rounded-md m-4">
                  <p className="text-black text-2xl md:text-8xl">Activator</p>
                </div>
                <div className="block7 bg-gray-200 border border-black rounded-md p-4 m-4 overflow-auto">
                  <p className="">
                    Activator is a decentralized app on Near Protocol that
                    rewards users for active participation in the Near
                    ecosystem. It uses a leaderboard to track users'
                    contributions and boost community engagement.
                  </p>
                </div>
                <div className="block5 relative text-center bg-gray-200 border border-black rounded-md m-4 p-4">
                  <img
                    src="https://i.postimg.cc/SNgr0BWt/18505047-SL-070720-32260-21.png"
                    alt="Animated Sticker"
                    className="mx-auto w-96"
                  />
                </div>

                <div className="blockadd2">
                  <div className="flex justify-center mt-4">
                    <Button className="text-sm md:text-base">Click Here</Button>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dapp;