import React from "react";
import { useEffect } from "react";
import Button from "./Components/Button";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
const CustomCard = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <div
        className="px-2 py-20 w-full flex justify-center"
        data-aos="fade-up-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
          <div className="lg:w-1/2">
            <div
              className="rounded-md m-4 p-4 flex justify-center items-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img
                src="https://i.postimg.cc/sDhmk02p/Animated-Sticker1-ezgif-com-gif-maker.gif"
                alt="Animated Sticker"
                style={{ maxWidth: "250px" }}
              />
            </div>
          </div>
          <div
            className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h2 className="text-3xl text-gray-800 font-bold">
              Multi
              <span className="text-red-600">x</span>
              ender
            </h2>
            <p
              className="mt-4 text-gray-600"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              MultiXender, built on the Near Protocol, empowers users to
              transmit NEAR tokens to multiple recipients simultaneously through
              a single transaction, optimizing speed, security, and efficiency.
            </p>
            <div className="mt-8">
              <a href="https://near.org/fdaomultixender.near/widget/MultiXender">
                <Button className="text-sm md:text-base">Start Now</Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        class="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-gradient-to-r from-amber-500 to-pink-500"
        data-aos="zoom-out"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div data-theme="teal" class="mx-auto max-w-6xl">
          <h2 class="sr-only">Featured case study</h2>
          <section class="font-sans text-black">
            <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div class="h-full">
                  <article class="h-full">
                    <div class="h-full">
                      <img
                        className="object-cover"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        src="https://i.postimg.cc/pVzPsS7Y/Animation-1715677780030.gif"
                        width="700"
                        height="300"
                        alt=""
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div class="p-6 bg-grey">
                <div class="leading-relaxed">
                  <div className="bg-white rounded-lg p-4">
                    <h2 className="leading-tight text-4xl font-bold">
                      Activator
                    </h2>
                    <p class="mt-4">
                      {" "}
                      Activator is a decentralized app on Near Protocol that
                      rewards users for active participation in the Near
                      ecosystem. It uses a leaderboard to track users'
                      contributions and boost community engagement.
                    </p>
                    <div className="flex justify-center mt-4">
                      <Button className="text-sm md:text-base">
                        ComingSoon
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
