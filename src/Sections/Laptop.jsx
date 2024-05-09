import React from "react";
import { useEffect } from "react";
import laptopImage from '../assets/img/laptop.png'; // Import the image file
import "./Laptop.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Laptop = () => {
    useEffect(() => {
        AOS.init({
        });
    }, []);
  return (
    <div id="main">
         {/* <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10" >We help create better products</h2> */}
         <img src={laptopImage} alt="Laptop" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" /> 
    </div>
  );
};

export default Laptop;
