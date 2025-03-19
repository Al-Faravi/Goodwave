import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/Event Discovery and Participation.jpg",
      title: "Event Discovery and Participation",
    },
    {
      id: 2,
      url: "/012.jpg",
      title: "Community Help Requests",
    },
    {
      id: 3,
      url: "/321.jpg",
      title: "Team Formation and Collaboration",
    },
    {
      id: 4,
      url: "/231.jpg",
      title: "Impact Tracking and Recognition",
    },
  ];

  return (
    <div className="services container">
      <h2>Our Services</h2>

      {/* Image-based Service Features */}
      <div className="banner">
        {services.map((service) => (
          <div className="item" key={service.id}>
            <h3>{service.title}</h3>
            <img src={service.url} alt={service.title} />
          </div>
        ))}
      </div>

      {/* Service Buttons */}
      <div className="service-buttons">
        <Link to="/discover-events" className="hero-btn">
          Discover Events
        </Link>
        <Link to="/post-a-help-request" className="service-btn">
          Offer Help
        </Link>
        <Link to="/form-teams" className="service-btn">
          Form Teams
        </Link>
      </div>
    </div>
  );
};

export default Services;
