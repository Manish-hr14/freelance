import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Change BrowserRouter to HashRouter
import GradientBackground from "./Components/GradientBackground";
import Navbar from "./Components/Navbar";
import ActivateWithActivator from "./Components/Activator";
import "./Components/App.css";
import Introduction from "./Sections/Header";
import Mission from "./Sections/ChartSection";
import Vision from "./Sections/MessagingSection";
import Founder from "./Sections/PricingSection";
import Footer from "./Components/Footer";
import MultiXender from "./Components/MultiXender";
import CardComponent from "./Components/Cardss";
import CircleCardSection from "./Sections/CircleSection";
import Dapp from "./Components/Dapps";

const App = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const Home = () => {
    return (
      <>
        <Navbar />
        <Dapp />
      </>
    );
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="bg-gradient-to-r from-amber-500 to-pink-500">
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/AboutUs" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const AboutPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <Introduction />
      <Mission />
      <Vision />
      <CircleCardSection />
      <Founder />
      <button
        className="open-modal-button"
        onClick={() => setShowModal(true)}
      >
        Click
      </button>
      {showModal && (
        <CardComponent onClose={handleCloseModal} setShowModal={setShowModal} />
      )}
      <Footer />
    </>
  );
};

export default App;
