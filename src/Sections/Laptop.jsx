import React, { useEffect } from "react";
import laptopImage from '../assets/img/laptop.png'; // Import the image file
import fdao from '../assets/img/fdaoo.mp4';
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
        maxHeight: '100%',
        width: 'auto',
        height: 'auto'
    };

    return (
        <div id="main">
            <div style={laptopContainerStyle}>
                <img src={laptopImage} className="img-fluid" alt="Laptop" />
                <video src={fdao} controls style={videoOverlayStyle}></video>
            </div>
            <div className="row">
                <div className="col-12 text-white ">
                    <p className="heading">We help create better products </p>
                </div>
            </div>
        </div>
    );
};

export default Laptop;
