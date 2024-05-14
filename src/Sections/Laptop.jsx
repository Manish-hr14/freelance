import React, { useEffect } from "react";
import laptopImage from '../assets/img/laptop.png'; // Import the image file
import fdao from '../assets/img/fdao_logo.jpg';
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Laptop = () => {
    useEffect(() => {
        AOS.init({});
    }, []);

    const laptopContainerStyle = {
        position: 'relative',
        display: 'inline-block'
    };

    const videoOverlayStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '72%',
        maxHeight: '80%',
        width: 'auto',
        height: 'auto'
    };

    return (
        <div id="main">
            <div style={laptopContainerStyle}>
                <img src={laptopImage} className="img-fluid" alt="Laptop" />
                <img src={fdao} controls style={videoOverlayStyle}></img>
            </div>
        </div>
    );
};

export default Laptop;
