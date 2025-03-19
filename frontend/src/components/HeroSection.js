import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const loggedInUser = localStorage.getItem("loggedInUser") || "Guest";

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome back, {loggedInUser}!</h1>
        <p>Make a difference today!</p>
        <div className="hero-buttons">
          {/* Redirecting to Discover Events Page */}
          <Link to="/discover-events" className="hero-btn">Discover Events</Link>
          
          {/* Redirecting to Post a Help Request Page */}
          <Link to="/post-a-help-request" className="hero-btn secondary">Post a Help Request</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
