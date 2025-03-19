import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about container">
      <h4>About HandsOn</h4>
      <h2>About HandsOn</h2>
      <p>
        HandsOn is a community-driven platform that connects volunteers with
        meaningful social impact opportunities. Join us to make a difference in
        your community!
      </p>
      <Link to="/about-us" className="learn-more-btn">Learn More</Link>
    </section>
  );
};

export default About;
